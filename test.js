const fs = require('fs');

console.log("Iniciando pruebas automáticas...");

// Verificar que exista index.html
if (fs.existsSync('./index.html')) {
    console.log("✅ index.html encontrado");
} else {
    console.log("❌ index.html NO encontrado");
    process.exit(1);
}

// Verificar que exista style.css
if (fs.existsSync('./style.css')) {
    console.log("✅ style.css encontrado");
} else {
    console.log("❌ style.css NO encontrado");
    process.exit(1);
}

console.log("🎉 Todas las pruebas pasaron correctamente");
