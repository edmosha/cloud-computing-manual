#!/bin/bash

# Проверка наличия аргументов
if [ $# -ne 2 ]; then
    echo "Использование: $0 <путь> <название>"
    exit 1
fi

# Получение аргументов
path="$1"
name="$2"

component_name="$(tr '[:lower:]' '[:upper:]' <<< ${name:0:1})${name:1}"

# Создание директорий и файлов
mkdir -p "$path/$name/ui"
touch "$path/$name/ui/$name.tsx"

echo -e "import React from 'react'\n\nexport const $component_name = () => {\n  return (" >> "$path/$name/ui/$name.tsx"
echo -e "    <div>\n      \n    </div>\n  )\n}" >> "$path/$name/ui/$name.tsx"

echo "export * from './$name.tsx'" > "$path/$name/ui/index.ts"
echo "export * from './ui'" > "$path/$name/index.ts"

echo "Структура файлов успешно создана в директории $path/$name"
