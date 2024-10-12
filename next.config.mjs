/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['cdn-icons-png.flaticon.com'],
    },
    async headers() {
        return [
            {
                // Aplica la CSP solo a la ruta "/dashboard/billing" y las rutas relacionadas
                source: "/dashboard/billing(.*)",
                headers: [
                    {
                        key: "Content-Security-Policy",
                        value: "script-src 'self' 'unsafe-eval' 'unsafe-inline' *.google.com *.googletagmanager.com https://js-agent.newrelic.com *.hotjar.com *.nr-data.net *.mlstatic.com;",
                    },
                ],
            },
        ];
    },
};

export default nextConfig;
