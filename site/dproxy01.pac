function FindProxyForURL(url, host) {
    // Check if the host matches *.clarivoy.com or clarivoy.com
    if (dnsDomainIs(host, ".clarivoy.com") || host === "clarivoy.com") {
        // Return SOCKS proxy for these domains
        // Note: Use "SOCKS5" if your proxy supports it; otherwise, use "SOCKS"
        return "SOCKS5 127.0.0.1:8972; SOCKS 127.0.0.1:8972; DIRECT";
    }

    // Default: Connect directly for all other traffic
    return "DIRECT";
}
