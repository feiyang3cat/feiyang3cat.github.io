#!/bin/zsh

set -eu

if [[ $# -ne 1 ]]; then
  print -u2 "usage: $0 <album-name>"
  print -u2 "example: $0 09-26-gymn"
  exit 2
fi

album_name="$1"

if [[ ! "$album_name" =~ '^[A-Za-z0-9._-]+$' ]]; then
  print -u2 "album name may contain only letters, numbers, dots, underscores, and hyphens"
  exit 2
fi

script_dir="${0:A:h}"
site_root="${script_dir:h}"
source_dir="$site_root/photos/originals/$album_name"
web_dir="$site_root/photos/web/$album_name"
download_dir="$site_root/photos/downloads/$album_name"

if [[ ! -d "$source_dir" ]]; then
  print -u2 "originals directory not found: $source_dir"
  exit 1
fi

mkdir -p "$web_dir" "$download_dir"
conversion_tmp="$(mktemp -d "/tmp/fx-photo-${album_name}.XXXXXX")"
trap 'rm -rf -- "$conversion_tmp"' EXIT

typeset -a originals
originals=("$source_dir"/*.(HEIC|heic)(N))

if (( ${#originals} == 0 )); then
  print -u2 "no HEIC files found in: $source_dir"
  exit 1
fi

for original in "${originals[@]}"; do
  filename="${original:t}"
  stem="${filename:r}"
  preview_png="$conversion_tmp/$filename.png"
  web_jpg="$web_dir/$stem.jpg"

  # Quick Look reliably decodes recent iPhone HEIC/HDR files. The script never
  # opens or visually inspects the generated preview.
  qlmanage -t -s 2400 -o "$conversion_tmp" "$original" >/dev/null 2>&1
  sips -s format jpeg -s formatOptions 88 "$preview_png" --out "$web_jpg" >/dev/null

  # Preserve the byte-for-byte HEIC original as the public download.
  cp -p "$original" "$download_dir/$filename"

  print "generated ${web_jpg#$site_root/}"
  print "preserved ${download_dir#$site_root/}/$filename"
done

print "done: ${#originals} photo(s)"
