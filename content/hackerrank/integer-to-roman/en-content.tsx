export const integerToRomanDetailEn = (
    <>
        <p>Given an integer from 1 to 3999, return its Roman representation.</p>
        <h2>Statement</h2>
        <p>Use predefined tables for thousands, hundreds, tens, and units. Each index 0–9 maps to the correct symbol including IV, IX, XL, etc.</p>
        <h2>Example</h2>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`Input:  2324
Output: "MMCCCXXIV"`}
        </pre>
        <h2>Approach</h2>
        <ol><li>Tables: thousands, hundreds, tens, units.</li><li><code>num/1000</code>, <code>(num%1000)/100</code>, etc.</li><li>Concatenate lookups.</li></ol>
        <h2>Complexity</h2>
        <ul>
            <li><strong>Time:</strong> <code>O(1)</code></li>
            <li><strong>Space:</strong> <code>O(1)</code></li>
        </ul>
        <h2>Java solution</h2>
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
