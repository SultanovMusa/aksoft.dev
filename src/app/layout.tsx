import type { Metadata } from "next";
import localFont from "next/font/local";
import LayouPagest from "@/components/layout/LayouPagest";

import "./globals.css";


const geistSans = localFont({
	src: "./fonts/GeistVF.woff",
	variable: "--font-geist-sans",
	weight: "100 900",
});
const geistMono = localFont({
	src: "./fonts/GeistMonoVF.woff",
	variable: "--font-geist-mono",
	weight: "100 900",
});

export const metadata: Metadata = {
	title: "Aksoft IT компания Кыргызстан",
  description: "IT компания Аксофт разработка мобильных приложений, разработка Crm систем для автоматизации бизнеса, система онлайн бронирования, программа для салонов красоты и медицинских центров",
  keywords: "it company Kyrgyzsatan, аксофт Бишкек, ит специлисты, разработка мобильных приложений, разработка программ, разработка сайтов Бишкек, Crm системы, автоматизация бизнеса, IT компания Aksoft Бишкек, IT специалисты Бишкек, программисты Кыргызстан",
};


export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${geistSans.variable} ${geistMono.variable}`}>
					<LayouPagest>{children}</LayouPagest>
			</body>
		</html>
	);
}
