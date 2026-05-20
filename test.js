const fs = require('fs');

console.log("=================================");
console.log("INICIANDO PRUEBAS AUTOMÁTICAS");
console.log("=================================");

const archivos = [
    'index.html',
    'style.css'
];

let errores = false;

archivos.forEach((archivo) => {
    if (fs.existsSync(archivo)) {
        console.log(`✅ ${archivo} encontrado`);
    } else {
        console.log(`❌ ERROR: ${archivo} NO encontrado`);
        errores = true;
    }
});

console.log("=================================");

if (errores) {
    console.log("❌ LAS PRUEBAS FALLARON");
    process.exit(1);
} else {
    console.log("🎉 TODAS LAS PRUEBAS PASARON");
    process.exit(0);
}
