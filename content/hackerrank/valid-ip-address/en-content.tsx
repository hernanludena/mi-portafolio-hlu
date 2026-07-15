export const validIpAddressDetailEn = (
    <>
        <p>Write a regex validating IPs in A.B.C.D format where each octet is 0–255.</p>
        <h2>Statement</h2>
        <p>Valid: <code>121.234.12.12</code>. Invalid: too many octets, letters, octets &gt; 255.</p>
        <h2>Example</h2>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`000.12.12.034  → true
121.234.12.12  → true
Hello.IP       → false`}
        </pre>
        <h2>Approach</h2>
        <p>Valid octet: <code>{`([01]?\\d{1,2}|2[0-4]\\d|25[0-5])`}</code> covers 0–199, 200–249, and 250–255.</p>
        <h2>Complexity</h2>
        <ul>
            <li><strong>Time:</strong> <code>O(1)</code> per match</li>
            <li><strong>Space:</strong> <code>O(1)</code></li>
        </ul>
        <h2>Java solution</h2>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            <code>{`class MyRegex {
    String octet = "([01]?\\d{1,2}|2[0-4]\\d|25[0-5])";
    public String pattern = "^" + octet + "\\." + octet + "\\." + octet + "\\." + octet + "$";
}`}</code>
        </pre>
        
    </>
);
