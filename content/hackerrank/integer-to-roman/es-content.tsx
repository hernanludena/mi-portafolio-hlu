export const integerToRomanDetailEs = (
    <>
        <p>Dado un entero entre 1 y 3999, devolver su representación romana.</p>
        <h2>Enunciado</h2>
        <p>Usar tablas predefinidas para miles, centenas, decenas y unidades. Cada índice 0–9 mapea al símbolo correcto incluyendo IV, IX, XL, etc.</p>
        <h2>Ejemplo</h2>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`Input:  2324
Output: "MMCCCXXIV"`}
        </pre>
        <h2>Enfoque</h2>
        <ol><li>Tablas: thousands, hundreds, tens, units.</li><li><code>num/1000</code>, <code>(num%1000)/100</code>, etc.</li><li>Concatenar lookups.</li></ol>
        <h2>Complejidad</h2>
        <ul>
            <li><strong>Tiempo:</strong> <code>O(1)</code></li>
            <li><strong>Espacio:</strong> <code>O(1)</code></li>
        </ul>
        <h2>Solución en Java</h2>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            <code>{`public String intToRoman(int num) {
    String[] thousands = {"", "M", "MM", "MMM"};
    String[] hundreds = {"", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"};
    String[] tens = {"", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"};
    String[] units = {"", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"};

    return thousands[num / 1000]
        + hundreds[(num % 1000) / 100]
        + tens[(num % 100) / 10]
        + units[num % 10];
}`}</code>
        </pre>
        
    </>
);
