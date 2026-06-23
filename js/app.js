/* ============================================
   FreeTools — App Logic + i18n
   ============================================ */

// ============ Translations ============
const translations = {
    en: {
        nav_tools: "Tools",
        nav_features: "Features",
        nav_faq: "FAQ",
        hero_badge: "100% Free & Open Source",
        hero_line1: "Beautiful tools.",
        hero_line2: "For everyone.",
        hero_subtitle: "Fast, private, and works on any device. No signup required.",
        hero_cta: "Start Using",
        tools_title: "All Tools",
        tools_subtitle: "Everything runs in your browser. Your data never leaves your device.",
        tool_compress: "Image Compressor",
        tool_compress_desc: "Reduce image size without losing quality",
        tool_color: "Color Picker",
        tool_color_desc: "Pick any color, get HEX, RGB, HSL values",
        tool_text: "Text Tools",
        tool_text_desc: "Case convert, count words, remove duplicates",
        tool_json_desc: "Format, validate, and beautify JSON",
        tool_qr_desc: "Generate QR codes for any text or URL",
        tool_pass_desc: "Create strong, secure passwords",
        tool_base64_desc: "Encode and decode Base64 strings",
        tool_hash_desc: "Generate MD5, SHA-1, SHA-256 hashes",
        tool_macro_desc: "Calculate calories and macros for your diet",
        tool_regex_desc: "Test regular expressions in real time",
        tool_unit_desc: "Convert between different units of measurement",
        tool_lorem_desc: "Generate placeholder text for your designs",
        features_title: "Why FreeTools?",
        feature1_title: "100% Private",
        feature1_desc: "Everything runs in your browser. No data is sent to any server.",
        feature2_title: "Lightning Fast",
        feature2_desc: "No loading times. Everything happens instantly on your device.",
        feature3_title: "Works Everywhere",
        feature3_desc: "Desktop, tablet, or phone. Any browser, any OS.",
        feature4_title: "Multi-Language",
        feature4_desc: "Available in 10 languages with more coming soon.",
        feature5_title: "Beautiful Design",
        feature5_desc: "Clean, modern interface inspired by Apple's design language.",
        feature6_title: "Forever Free",
        feature6_desc: "No premium tiers, no hidden costs. Everything is free.",
        faq_title: "Frequently Asked Questions",
        faq1_q: "Is this really free?",
        faq1_a: "Yes, absolutely free. No hidden costs, no premium plans. Open source on GitHub.",
        faq2_q: "Is my data safe?",
        faq2_a: "Yes. All processing happens in your browser. No data is uploaded to any server.",
        faq3_q: "Can I use this on mobile?",
        faq3_a: "Yes! The site is fully responsive and works on any device.",
        faq4_q: "How can I contribute?",
        faq4_a: "Fork the repo on GitHub, make changes, and submit a pull request.",
        footer_desc: "Free, beautiful tools for everyone.",
        footer_copy: "Made with love. Free forever.",
        back: "Back",
        upload_image: "Upload Image",
        download: "Download",
        convert: "Convert",
        encode: "Encode",
        decode: "Decode",
        copy: "Copy",
        generate: "Generate",
        clear: "Clear",
        result: "Result",
        input: "Input",
        output: "Output"
    },
    ru: {
        nav_tools: "Инструменты",
        nav_features: "Возможности",
        nav_faq: "Вопросы",
        hero_badge: "100% Бесплатно и Открытый Код",
        hero_line1: "Красивые инструменты.",
        hero_line2: "Для каждого.",
        hero_subtitle: "Быстро, приватно, работает на любом устройстве. Регистрация не нужна.",
        hero_cta: "Начать",
        tools_title: "Все инструменты",
        tools_subtitle: "Всё работает в вашем браузере. Ваши данные покидают ваше устройство.",
        tool_compress: "Сжатие изображений",
        tool_compress_desc: "Уменьшите размер изображения без потери качества",
        tool_color: "Палитра цветов",
        tool_color_desc: "Выберите цвет, получите HEX, RGB, HSL значения",
        tool_text: "Текстовые инструменты",
        tool_text_desc: "Смена регистра, подсчёт слов, удаление дублей",
        tool_json_desc: "Форматируйте, проверяйте и beautify JSON",
        tool_qr_desc: "Генерируйте QR-коды для любого текста или URL",
        tool_pass_desc: "Создавайте надёжные пароли",
        tool_base64_desc: "Кодируйте и декодируйте Base64 строки",
        tool_hash_desc: "Генерируйте MD5, SHA-1, SHA-256 хеши",
        tool_macro_desc: "Рассчитайте калории и макросы для диеты",
        tool_regex_desc: "Тестируйте регулярные выражения в реальном времени",
        tool_unit_desc: "Конвертируйте единицы измерения",
        tool_lorem_desc: "Генерируйте текст-заглушку для дизайнов",
        features_title: "Почему FreeTools?",
        feature1_title: "100% Приватно",
        feature1_desc: "Всё работает в вашем браузере. Данные не отправляются на сервер.",
        feature2_title: "Молниеносно",
        feature2_desc: "Нет загрузки. Всё мгновенно на вашем устройстве.",
        feature3_title: "Работает везде",
        feature3_desc: "Десктоп, планшет или телефон. Любой браузер, любая ОС.",
        feature4_title: "Мультиязычность",
        feature4_desc: "Доступно на 10 языках, скоро будет больше.",
        feature5_title: "Красивый дизайн",
        feature5_desc: "Чистый современный интерфейс в стиле Apple.",
        feature6_title: "Навсегда бесплатно",
        feature6_desc: "Нет платных планов, нет скрытых платежей.",
        faq_title: "Часто задаваемые вопросы",
        faq1_q: "Это правда бесплатно?",
        faq1_a: "Да, абсолютно бесплатно. Нет скрытых платежей. Открытый код на GitHub.",
        faq2_q: "Мои данные в безопасности?",
        faq2_a: "Да. Вся обработка в браузере. Данные не загружаются на сервер.",
        faq3_q: "Можно ли использовать на мобильном?",
        faq3_a: "Да! Сайт полностью адаптирован для любых устройств.",
        faq4_q: "Как я могу внести вклад?",
        faq4_a: "Сделайте форк репозитория на GitHub, внесите изменения и отправьте pull request.",
        footer_desc: "Бесплатные красивые инструменты для каждого.",
        footer_copy: "Сделано с любовью. Бесплатно навсегда.",
        back: "Назад",
        upload_image: "Загрузить изображение",
        download: "Скачать",
        convert: "Конвертировать",
        encode: "Кодировать",
        decode: "Декодировать",
        copy: "Копировать",
        generate: "Генерировать",
        clear: "Очистить",
        result: "Результат",
        input: "Ввод",
        output: "Вывод"
    },
    es: {
        nav_tools: "Herramientas",
        nav_features: "Características",
        nav_faq: "FAQ",
        hero_badge: "100% Gratis y Código Abierto",
        hero_line1: "Herramientas hermosas.",
        hero_line2: "Para todos.",
        hero_subtitle: "Rápido, privado, funciona en cualquier dispositivo.",
        hero_cta: "Empezar",
        tools_title: "Todas las Herramientas",
        tools_subtitle: "Todo funciona en tu navegador. Tus datos nunca salen de tu dispositivo.",
        tool_compress: "Compresor de Imágenes",
        tool_compress_desc: "Reduce el tamaño de imagen sin perder calidad",
        tool_color: "Selector de Color",
        tool_color_desc: "Elige cualquier color, obtén valores HEX, RGB, HSL",
        tool_text: "Herramientas de Texto",
        tool_text_desc: "Convertir mayúsculas, contar palabras, eliminar duplicados",
        tool_json_desc: "Formatear, validar y embellecer JSON",
        tool_qr_desc: "Generar códigos QR para cualquier texto o URL",
        tool_pass_desc: "Crear contraseñas seguras y fuertes",
        tool_base64_desc: "Codificar y decodificar cadenas Base64",
        tool_hash_desc: "Generar hashes MD5, SHA-1, SHA-256",
        tool_macro_desc: "Calcular calorías y macros para tu dieta",
        tool_regex_desc: "Probar expresiones regulares en tiempo real",
        tool_unit_desc: "Convertir entre diferentes unidades de medida",
        tool_lorem_desc: "Generar texto de relleno para tus diseños",
        features_title: "¿Por qué FreeTools?",
        feature1_title: "100% Privado",
        feature1_desc: "Todo funciona en tu navegador. No se envían datos al servidor.",
        feature2_title: "Ultra Rápido",
        feature2_desc: "Sin tiempos de carga. Todo ocurre al instante.",
        feature3_title: "Funciona en Todas Partes",
        feature3_desc: "Escritorio, tableta o teléfono. Cualquier navegador.",
        feature4_title: "Multi-Idioma",
        feature4_desc: "Disponible en 10 idiomas.",
        feature5_title: "Diseño Hermoso",
        feature5_desc: "Interfaz limpia y moderna inspirada en Apple.",
        feature6_title: "Gratis Para Siempre",
        feature6_desc: "Sin planes premium, sin costos ocultos.",
        faq_title: "Preguntas Frecuentes",
        faq1_q: "¿Es realmente gratis?",
        faq1_a: "Sí, absolutamente gratis. Código abierto en GitHub.",
        faq2_q: "¿Mis datos están seguros?",
        faq2_a: "Sí. Todo se procesa en tu navegador. No se suben datos al servidor.",
        faq3_q: "¿Puedo usarlo en móvil?",
        faq3_a: "¡Sí! El sitio es totalmente responsive.",
        faq4_q: "¿Cómo puedo contribuir?",
        faq4_a: "Haz un fork del repositorio en GitHub y envía un pull request.",
        footer_desc: "Herramientas hermosas y gratis para todos.",
        footer_copy: "Hecho con amor. Gratis para siempre.",
        back: "Volver",
        upload_image: "Subir Imagen",
        download: "Descargar",
        convert: "Convertir",
        encode: "Codificar",
        decode: "Decodificar",
        copy: "Copiar",
        generate: "Generar",
        clear: "Limpiar",
        result: "Resultado",
        input: "Entrada",
        output: "Salida"
    },
    de: {
        nav_tools: "Werkzeuge",
        nav_features: "Funktionen",
        nav_faq: "FAQ",
        hero_badge: "100% Kostenlos & Open Source",
        hero_line1: "Wunderschöne Tools.",
        hero_line2: "Für alle.",
        hero_subtitle: "Schnell, privat und funktioniert auf jedem Gerät.",
        hero_cta: "Loslegen",
        tools_title: "Alle Werkzeuge",
        tools_subtitle: "Alles läuft in Ihrem Browser. Ihre Daten verlassen Ihr Gerät nie.",
        tool_compress: "Bildkomprimierung",
        tool_compress_desc: "Bildgröße reduzieren ohne Qualitätsverlust",
        tool_color: "Farbwähler",
        tool_color_desc: "Beliebige Farbe wählen, HEX, RGB, HSL-Werte erhalten",
        tool_text: "Textwerkzeuge",
        tool_text_desc: "Groß-/Kleinbuchstaben, Wörter zählen, Duplikate entfernen",
        tool_json_desc: "JSON formatieren, validieren und verschönern",
        tool_qr_desc: "QR-Codes für jeden Text oder URL generieren",
        tool_pass_desc: "Starke, sichere Passwörter erstellen",
        tool_base64_desc: "Base64-Zeichenfolgen kodieren und dekodieren",
        tool_hash_desc: "MD5, SHA-1, SHA-256 Hashes generieren",
        tool_macro_desc: "Kalorien und Makros für Ihre Ernährung berechnen",
        tool_regex_desc: "Reguläre Ausdrücke in Echtzeit testen",
        tool_unit_desc: "Zwischen verschiedenen Maßeinheiten umrechnen",
        tool_lorem_desc: "Platzhaltertext für Ihre Designs generieren",
        features_title: "Warum FreeTools?",
        feature1_title: "100% Privat",
        feature1_desc: "Alles läuft in Ihrem Browser. Keine Daten werden gesendet.",
        feature2_title: "Blitzschnell",
        feature2_desc: "Keine Ladezeiten. Alles passiert sofort.",
        feature3_title: "Überall funktioniert",
        feature3_desc: "Desktop, Tablet oder Handy. Jeder Browser.",
        feature4_title: "Mehrsprachig",
        feature4_desc: "In 10 Sprachen verfügbar.",
        feature5_title: "Wunderschönes Design",
        feature5_desc: "Saubere, moderne Oberfläche im Apple-Stil.",
        feature6_title: "Für immer kostenlos",
        feature6_desc: "Keine Premium-Pläne, keine versteckten Kosten.",
        faq_title: "Häufig gestellte Fragen",
        faq1_q: "Ist das wirklich kostenlos?",
        faq1_a: "Ja, absolut kostenlos. Open Source auf GitHub.",
        faq2_q: "Sind meine Daten sicher?",
        faq2_a: "Ja. Alles wird in Ihrem Browser verarbeitet.",
        faq3_q: "Kann ich es auf dem Handy nutzen?",
        faq3_a: "Ja! Die Seite ist vollständig responsiv.",
        faq4_q: "Wie kann ich beitragen?",
        faq4_a: "Forke das Repo auf GitHub und sende einen Pull Request.",
        footer_desc: "Kostenlose, schöne Tools für alle.",
        footer_copy: "Mit Liebe gemacht. Kostenlos für immer.",
        back: "Zurück",
        upload_image: "Bild hochladen",
        download: "Herunterladen",
        convert: "Konvertieren",
        encode: "Kodieren",
        decode: "Dekodieren",
        copy: "Kopieren",
        generate: "Generieren",
        clear: "Löschen",
        result: "Ergebnis",
        input: "Eingabe",
        output: "Ausgabe"
    },
    fr: {
        nav_tools: "Outils",
        nav_features: "Fonctionnalités",
        nav_faq: "FAQ",
        hero_badge: "100% Gratuit & Open Source",
        hero_line1: "Outils magnifiques.",
        hero_line2: "Pour tous.",
        hero_subtitle: "Rapide, privé, fonctionne sur tous les appareils.",
        hero_cta: "Commencer",
        tools_title: "Tous les Outils",
        tools_subtitle: "Tout fonctionne dans votre navigateur. Vos données ne quittent jamais votre appareil.",
        tool_compress: "Compresseur d'Images",
        tool_compress_desc: "Réduire la taille sans perdre en qualité",
        tool_color: "Pipette de Couleur",
        tool_color_desc: "Choisir n'importe quelle couleur, obtenir HEX, RGB, HSL",
        tool_text: "Outils Texte",
        tool_text_desc: "Convertir la casse, compter les mots, supprimer les doublons",
        tool_json_desc: "Formater, valider et embellir JSON",
        tool_qr_desc: "Générer des QR codes pour tout texte ou URL",
        tool_pass_desc: "Créer des mots de passe forts et sécurisés",
        tool_base64_desc: "Encoder et décoder les chaînes Base64",
        tool_hash_desc: "Générer des hashes MD5, SHA-1, SHA-256",
        tool_macro_desc: "Calculer les calories et macros pour votre régime",
        tool_regex_desc: "Tester les expressions régulières en temps réel",
        tool_unit_desc: "Convertir entre différentes unités de mesure",
        tool_lorem_desc: "Générer du texte de remplissage pour vos designs",
        features_title: "Pourquoi FreeTools?",
        feature1_title: "100% Privé",
        feature1_desc: "Tout fonctionne dans votre navigateur. Aucune donnée envoyée.",
        feature2_title: "Ultra Rapide",
        feature2_desc: "Pas de temps de chargement. Tout est instantané.",
        feature3_title: "Fonctionne Partout",
        feature3_desc: "Bureau, tablette ou téléphone. Tout navigateur.",
        feature4_title: "Multi-Langue",
        feature4_desc: "Disponible en 10 langues.",
        feature5_title: "Design Magnifique",
        feature5_desc: "Interface propre et moderne inspirée d'Apple.",
        feature6_title: "Toujours Gratuit",
        feature6_desc: "Pas de plans premium, pas de coûts cachés.",
        faq_title: "Questions Fréquentes",
        faq1_q: "C'est vraiment gratuit?",
        faq1_a: "Oui, absolument gratuit. Open source sur GitHub.",
        faq2_q: "Mes données sont-elles sécurisées?",
        faq2_a: "Oui. Tout est traité dans votre navigateur.",
        faq3_q: "Puis-je l'utiliser sur mobile?",
        faq3_a: "Oui! Le site est entièrement responsive.",
        faq4_q: "Comment puis-je contribuer?",
        faq4_a: "Forkez le dépôt sur GitHub et soumettez une pull request.",
        footer_desc: "Outils gratuits et magnifiques pour tous.",
        footer_copy: "Fait avec amour. Gratuit pour toujours.",
        back: "Retour",
        upload_image: "Télécharger l'image",
        download: "Télécharger",
        convert: "Convertir",
        encode: "Encoder",
        decode: "Décoder",
        copy: "Copier",
        generate: "Générer",
        clear: "Effacer",
        result: "Résultat",
        input: "Entrée",
        output: "Sortie"
    },
    pt: {
        nav_tools: "Ferramentas",
        nav_features: "Recursos",
        nav_faq: "FAQ",
        hero_badge: "100% Gratuito & Código Aberto",
        hero_line1: "Ferramentas bonitas.",
        hero_line2: "Para todos.",
        hero_subtitle: "Rápido, privado, funciona em qualquer dispositivo.",
        hero_cta: "Começar",
        tools_title: "Todas as Ferramentas",
        tools_subtitle: "Tudo roda no seu navegador. Seus dados nunca saem do seu dispositivo.",
        tool_compress: "Compressor de Imagem",
        tool_compress_desc: "Reduza o tamanho sem perder qualidade",
        tool_color: "Seletor de Cores",
        tool_color_desc: "Escolha qualquer cor, obtenha HEX, RGB, HSL",
        tool_text: "Ferramentas de Texto",
        tool_text_desc: "Converter maiúsculas, contar palavras, remover duplicatas",
        tool_json_desc: "Formatar, validar e embelezar JSON",
        tool_qr_desc: "Gerar QR codes para qualquer texto ou URL",
        tool_pass_desc: "Criar senhas fortes e seguras",
        tool_base64_desc: "Codificar e decodificar strings Base64",
        tool_hash_desc: "Gerar hashes MD5, SHA-1, SHA-256",
        tool_macro_desc: "Calcular calorias e macros para sua dieta",
        tool_regex_desc: "Testar expressões regulares em tempo real",
        tool_unit_desc: "Converter entre diferentes unidades de medida",
        tool_lorem_desc: "Gerar texto placeholder para seus designs",
        features_title: "Por que FreeTools?",
        feature1_title: "100% Privado",
        feature1_desc: "Tudo roda no navegador. Nenhum dado é enviado.",
        feature2_title: "Ultra Rápido",
        feature2_desc: "Sem tempos de carregamento. Tudo instantâneo.",
        feature3_title: "Funciona em Todo Lugar",
        feature3_desc: "Desktop, tablet ou celular. Qualquer navegador.",
        feature4_title: "Multi-Idioma",
        feature4_desc: "Disponível em 10 idiomas.",
        feature5_title: "Design Bonito",
        feature5_desc: "Interface limpa e moderna inspirada na Apple.",
        feature6_title: "Gratuito Para Sempre",
        feature6_desc: "Sem planos premium, sem custos ocultos.",
        faq_title: "Perguntas Frequentes",
        faq1_q: "É realmente gratuito?",
        faq1_a: "Sim, totalmente gratuito. Código aberto no GitHub.",
        faq2_q: "Meus dados estão seguros?",
        faq2_a: "Sim. Tudo é processado no seu navegador.",
        faq3_q: "Posso usar no celular?",
        faq3_a: "Sim! O site é totalmente responsivo.",
        faq4_q: "Como posso contribuir?",
        faq4_a: "Faça fork do repositório no GitHub e envie um pull request.",
        footer_desc: "Ferramentas gratuitas e bonitas para todos.",
        footer_copy: "Feito com amor. Gratuito para sempre.",
        back: "Voltar",
        upload_image: "Carregar Imagem",
        download: "Baixar",
        convert: "Converter",
        encode: "Codificar",
        decode: "Decodificar",
        copy: "Copiar",
        generate: "Gerar",
        clear: "Limpar",
        result: "Resultado",
        input: "Entrada",
        output: "Saída"
    },
    ja: {
        nav_tools: "ツール",
        nav_features: "機能",
        nav_faq: "FAQ",
        hero_badge: "100% 無料 & オープンソース",
        hero_line1: "美しいツール。",
        hero_line2: "みんなのために。",
        hero_subtitle: "高速、プライベート、あらゆるデバイスで動作。",
        hero_cta: "使い始める",
        tools_title: "全ツール",
        tools_subtitle: "すべてブラウザで動作。データはデバイスから出ません。",
        tool_compress: "画像圧縮",
        tool_compress_desc: "画質を落とさずにサイズ縮小",
        tool_color: "カラーピッカー",
        tool_color_desc: "任意の色を選んでHEX、RGB、HSL値を取得",
        tool_text: "テキストツール",
        tool_text_desc: "大文字変換、文字数カウント、重複削除",
        tool_json_desc: "JSONのフォーマット、検証、整形",
        tool_qr_desc: "テキストやURLのQRコード生成",
        tool_pass_desc: "安全なパスワードを生成",
        tool_base64_desc: "Base64のエンコードとデコード",
        tool_hash_desc: "MD5、SHA-1、SHA-256ハッシュを生成",
        tool_macro_desc: "ダイエットのカロリーとマクロを計算",
        tool_regex_desc: "正規表現をリアルタイムでテスト",
        tool_unit_desc: "単位の変換",
        tool_lorem_desc: "デザイン用のプレースホルダーテキストを生成",
        features_title: "なぜFreeTools?",
        feature1_title: "100% プライベート",
        feature1_desc: "すべてブラウザで動作。データ送信なし。",
        feature2_title: "超高速",
        feature2_desc: "ロードなし。すべて瞬時。",
        feature3_title: "どこでも動作",
        feature3_desc: "デスクトップ、タブレット、スマホ。全ブラウザ対応。",
        feature4_title: "多言語対応",
        feature4_desc: "10言語で利用可能。",
        feature5_title: "美しいデザイン",
        feature5_desc: "AppleのデザインにインスパイアされたクリーンなUI。",
        feature6_title: "永久無料",
        feature6_desc: "プレミアムなし、隠れたコストなし。",
        faq_title: "よくある質問",
        faq1_q: "本当に無料ですか？",
        faq1_a: "はい、完全に無料。GitHubでオープンソース。",
        faq2_q: "データは安全ですか？",
        faq2_a: "はい。すべてブラウザで処理。サーバーに送信されません。",
        faq3_q: "スマホで使えますか？",
        faq3_a: "はい！完全にレスポンシブです。",
        faq4_q: "貢献するには？",
        faq4_a: "GitHubでフォークしてプルリクエストを送ってください。",
        footer_desc: "みんなのための無料美しいツール。",
        footer_copy: "愛を込めて作成。永久無料。",
        back: "戻る",
        upload_image: "画像をアップロード",
        download: "ダウンロード",
        convert: "変換",
        encode: "エンコード",
        decode: "デコード",
        copy: "コピー",
        generate: "生成",
        clear: "クリア",
        result: "結果",
        input: "入力",
        output: "出力"
    },
    zh: {
        nav_tools: "工具",
        nav_features: "功能",
        nav_faq: "常见问题",
        hero_badge: "100% 免费 & 开源",
        hero_line1: "精美的工具。",
        hero_line2: "为每个人而生。",
        hero_subtitle: "快速、私密，适用于任何设备。无需注册。",
        hero_cta: "开始使用",
        tools_title: "所有工具",
        tools_subtitle: "一切在浏览器中运行，数据不会离开您的设备。",
        tool_compress: "图片压缩",
        tool_compress_desc: "不损失质量地减小图片大小",
        tool_color: "颜色选择器",
        tool_color_desc: "选择任意颜色，获取HEX、RGB、HSL值",
        tool_text: "文本工具",
        tool_text_desc: "大小写转换、字数统计、去重",
        tool_json_desc: "格式化、验证和美化JSON",
        tool_qr_desc: "为任何文本或URL生成二维码",
        tool_pass_desc: "创建强大安全的密码",
        tool_base64_desc: "编码和解码Base64字符串",
        tool_hash_desc: "生成MD5、SHA-1、SHA-256哈希",
        tool_macro_desc: "计算饮食的卡路里和营养素",
        tool_regex_desc: "实时测试正则表达式",
        tool_unit_desc: "在不同计量单位之间转换",
        tool_lorem_desc: "为设计生成占位文本",
        features_title: "为什么选择FreeTools?",
        feature1_title: "100% 私密",
        feature1_desc: "一切在浏览器中运行，不发送任何数据。",
        feature2_title: "极速",
        feature2_desc: "无加载时间，一切即时完成。",
        feature3_title: "随处可用",
        feature3_desc: "桌面、平板或手机，任何浏览器。",
        feature4_title: "多语言",
        feature4_desc: "支持10种语言。",
        feature5_title: "精美设计",
        feature5_desc: "受Apple启发的简洁现代界面。",
        feature6_title: "永久免费",
        feature6_desc: "无高级版本，无隐藏费用。",
        faq_title: "常见问题",
        faq1_q: "真的免费吗？",
        faq1_a: "是的，完全免费。GitHub开源。",
        faq2_q: "我的数据安全吗？",
        faq2_a: "是的。所有处理在浏览器中完成。",
        faq3_q: "可以在手机上使用吗？",
        faq3_a: "可以！网站完全响应式。",
        faq4_q: "如何贡献？",
        faq4_a: "在GitHub上fork仓库并提交pull request。",
        footer_desc: "为每个人提供的免费精美工具。",
        footer_copy: "用心制作。永久免费。",
        back: "返回",
        upload_image: "上传图片",
        download: "下载",
        convert: "转换",
        encode: "编码",
        decode: "解码",
        copy: "复制",
        generate: "生成",
        clear: "清除",
        result: "结果",
        input: "输入",
        output: "输出"
    },
    ko: {
        nav_tools: "도구",
        nav_features: "기능",
        nav_faq: "FAQ",
        hero_badge: "100% 무료 & 오픈소스",
        hero_line1: "아름다운 도구.",
        hero_line2: "모두를 위해.",
        hero_subtitle: "빠르고, 안전하고, 모든 기기에서 작동.",
        hero_cta: "시작하기",
        tools_title: "모든 도구",
        tools_subtitle: "모든 것이 브라우저에서 작동. 데이터가 기기 밖으로 나가지 않습니다.",
        tool_compress: "이미지 압축",
        tool_compress_desc: "품질 손실 없이 이미지 크기 줄이기",
        tool_color: "색상 선택기",
        tool_color_desc: "모든 색상을 선택하고 HEX, RGB, HSL 값 얻기",
        tool_text: "텍스트 도구",
        tool_text_desc: "대소문자 변환, 단어 수 세기, 중복 제거",
        tool_json_desc: "JSON 포맷, 검증, beautify",
        tool_qr_desc: "모든 텍스트나 URL의 QR 코드 생성",
        tool_pass_desc: "강력하고 안전한 비밀번호 생성",
        tool_base64_desc: "Base64 문자열 인코딩 및 디코딩",
        tool_hash_desc: "MD5, SHA-1, SHA-256 해시 생성",
        tool_macro_desc: "식단의 칼로리와 매크로 계산",
        tool_regex_desc: "정규식 실시간 테스트",
        tool_unit_desc: "다양한 단위 변환",
        tool_lorem_desc: "디자인용 플레이스홀더 텍스트 생성",
        features_title: "왜 FreeTools?",
        feature1_title: "100% 프라이빗",
        feature1_desc: "브라우저에서 모든 처리. 데이터 전송 없음.",
        feature2_title: "초고속",
        feature2_desc: "로딩 없음. 모든 것이 즉시.",
        feature3_title: "모두에서 작동",
        feature3_desc: "데스크톱, 태블릿, 폰. 모든 브라우저.",
        feature4_title: "다국어",
        feature4_desc: "10개 언어 지원.",
        feature5_title: "아름다운 디자인",
        feature5_desc: "Apple 스타일의 클린한 인터페이스.",
        feature6_title: "영원히 무료",
        feature6_desc: "프리미엄 없음, 숨겨진 비용 없음.",
        faq_title: "자주 묻는 질문",
        faq1_q: "정말 무료인가요?",
        faq1_a: "네, 완전히 무료. GitHub에서 오픈소스.",
        faq2_q: "데이터가 안전한가요?",
        faq2_a: "네. 브라우저에서 모든 처리가 이루어집니다.",
        faq3_q: "모바일에서 사용할 수 있나요?",
        faq3_a: "네! 완전히 반응형입니다.",
        faq4_q: "기여하는 방법은?",
        faq4_a: "GitHub에서 fork하고 pull request를 보내주세요.",
        footer_desc: "모두를 위한 무료 아름다운 도구.",
        footer_copy: "사랑으로 만들었습니다. 영원히 무료.",
        back: "뒤로",
        upload_image: "이미지 업로드",
        download: "다운로드",
        convert: "변환",
        encode: "인코딩",
        decode: "디코딩",
        copy: "복사",
        generate: "생성",
        clear: "지우기",
        result: "결과",
        input: "입력",
        output: "출력"
    },
    ar: {
        nav_tools: "الأدوات",
        nav_features: "المميزات",
        nav_faq: "الأسئلة الشائعة",
        hero_badge: "مجاني 100% ومفتوح المصدر",
        hero_line1: "أدوات جميلة.",
        hero_line2: "لكل شخص.",
        hero_subtitle: "سريع، خاص، يعمل على أي جهاز.",
        hero_cta: "ابدأ الآن",
        tools_title: "جميع الأدوات",
        tools_subtitle: "كل شيء يعمل في متصفحك. بياناتك لا تغرك جهازك أبداً.",
        tool_compress: "ضغط الصور",
        tool_compress_desc: "تقليل حجم الصورة بدون فقدان الجودة",
        tool_color: "منتقي الألوان",
        tool_color_desc: "اختر أي لون واحصل على HEX، RGB، HSL",
        tool_text: "أدوات النص",
        tool_text_desc: "تحويل حالة الأحرف، عد الكلمات، إزالة التكرارات",
        tool_json_desc: "تنسيق وتنسيق JSON",
        tool_qr_desc: "إنشاء رموز QR لأي نص أو عنوان",
        tool_pass_desc: "إنشاء كلمات مرور قوية وآمنة",
        tool_base64_desc: "ترميز وفك ترميز Base64",
        tool_hash_desc: "إنشاء تجزئات MD5، SHA-1، SHA-256",
        tool_macro_desc: "حساب السعرات والمغذيات لحميتك",
        tool_regex_desc: "اختبار التعبيرات النمطية في الوقت الفعلي",
        tool_unit_desc: "التحويل بين وحدات القياس المختلفة",
        tool_lorem_desc: "إنشاء نص بديل لتصاميمك",
        features_title: "لماذا FreeTools؟",
        feature1_title: "خصوصية 100%",
        feature1_desc: "كل شيء يعمل في متصفحك. لا يتم إرسال أي بيانات.",
        feature2_title: "سريع للغاية",
        feature2_desc: "بدون أوقات تحميل. كل شيء فوري.",
        feature3_title: "يعمل في كل مكان",
        feature3_desc: "سطح مكتب أو جهاز لوحي أو هاتف.",
        feature4_title: "متعدد اللغات",
        feature4_desc: "متوفر بـ 10 لغات.",
        feature5_title: "تصميم جميل",
        feature5_desc: "واجهة نظيفة وعصرية مستوحاة من Apple.",
        feature6_title: "مجاني للأبد",
        feature6_desc: "بدون خطط مدفوعة، بدون تكاليف خفية.",
        faq_title: "الأسئلة الشائعة",
        faq1_q: "هل هذا مجاني فعلاً؟",
        faq1_a: "نعم، مجاني تماماً. مفتوح المصدر على GitHub.",
        faq2_q: "هل بياناتي آمنة؟",
        faq2_a: "نعم. كل المعالجة تحدث في متصفحك.",
        faq3_q: "هل يمكنني استخدامه على الهاتف؟",
        faq3_a: "نعم! الموقع متجاوب تماماً.",
        faq4_q: "كيف يمكنني المساهمة؟",
        faq4_a: "عمل fork للمستودع على GitHub وأرسل pull request.",
        footer_desc: "أدوات مجانية وجميلة للجميع.",
        footer_copy: "صُنع بحب. مجاني للأبد.",
        back: "رجوع",
        upload_image: "رفع صورة",
        download: "تحميل",
        convert: "تحويل",
        encode: "ترميز",
        decode: "فك الترميز",
        copy: "نسخ",
        generate: "إنشاء",
        clear: "مسح",
        result: "النتيجة",
        input: "إدخال",
        output: "إخراج"
    }
};

// ============ Language Management ============
let currentLang = localStorage.getItem('freetools-lang') || navigator.language.slice(0, 2);

if (!translations[currentLang]) {
    currentLang = 'en';
}

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('freetools-lang', lang);
    document.documentElement.lang = lang;
    document.getElementById('currentLang').textContent = lang.toUpperCase();

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });

    // RTL support
    if (lang === 'ar') {
        document.documentElement.dir = 'rtl';
    } else {
        document.documentElement.dir = 'ltr';
    }
}

function t(key) {
    return (translations[currentLang] && translations[currentLang][key]) || translations.en[key] || key;
}

// ============ Init ============
document.addEventListener('DOMContentLoaded', () => {
    setLanguage(currentLang);

    // Language dropdown
    const langBtn = document.getElementById('langBtn');
    const langDropdown = document.getElementById('langDropdown');

    if (langBtn && langDropdown) {
        langBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            langDropdown.classList.toggle('active');
        });

        langDropdown.querySelectorAll('button').forEach(btn => {
            btn.addEventListener('click', () => {
                setLanguage(btn.dataset.lang);
                langDropdown.classList.remove('active');
            });
        });

        document.addEventListener('click', () => {
            langDropdown.classList.remove('active');
        });
    }

    // FAQ toggle
    document.querySelectorAll('.faq-question').forEach(q => {
        q.addEventListener('click', () => {
            const item = q.parentElement;
            item.classList.toggle('active');
        });
    });

    // Mobile menu
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const nav = document.querySelector('.nav');
    if (mobileMenuBtn && nav) {
        mobileMenuBtn.addEventListener('click', () => {
            nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
            nav.style.position = 'absolute';
            nav.style.top = 'var(--header-height)';
            nav.style.left = '0';
            nav.style.right = '0';
            nav.style.background = 'var(--card-bg)';
            nav.style.flexDirection = 'column';
            nav.style.padding = '16px 24px';
            nav.style.gap = '16px';
            nav.style.borderBottom = '1px solid var(--border)';
        });
    }
});

// ============ Visitor Counter ============
function initVisitorCounter() {
    const counterEl = document.getElementById('visitorCount');
    if (!counterEl) return;

    // Get or initialize today's count
    const today = new Date().toDateString();
    const stored = localStorage.getItem('freetools_visitors');
    let data = stored ? JSON.parse(stored) : { date: '', count: 0 };

    if (data.date !== today) {
        data = { date: today, count: 0 };
    }

    // Increment count
    data.count++;
    localStorage.setItem('freetools_visitors', JSON.stringify(data));

    // Display with animation
    let current = 0;
    const target = data.count;
    const duration = 1000;
    const step = target / (duration / 16);

    function animate() {
        current += step;
        if (current >= target) {
            counterEl.textContent = target.toLocaleString();
            return;
        }
        counterEl.textContent = Math.floor(current).toLocaleString();
        requestAnimationFrame(animate);
    }
    animate();
}

// Init counter on page load
document.addEventListener('DOMContentLoaded', initVisitorCounter);

// Export for tool pages
window.freetools = { t, translations, currentLang: () => currentLang };
