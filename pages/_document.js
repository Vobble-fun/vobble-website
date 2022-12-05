import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    render() {
        return (
            <Html className='scroll-smooth'>
                <Head>
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                    <link href="https://fonts.googleapis.com/css2?family=Gochi+Hand&display=swap" rel="stylesheet" />
                    <meta charSet="utf-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <meta property="og:title" content="Vobble | Screen Free Audio Stories with learn and play activities for Kids" />
                    <meta property="og:site_name" content="Vobble" />
                    <meta property="og:url" content="https://vobble.fun/" />
                    <meta property="og:description" content="Vobble is the best Screen-free immersive audio stories and music platform for kids 3-8 years old." />
                    <meta property="og:type" content="website" />
                    <meta property="og:image" content="https://vobble.fun/og-image.png?v=2" />
                    <meta name="next-head-count" content="10" />
                    <meta name="robots" content="index, follow" />
                    <meta name="description" content="Vobble is the best Screen-free immersive audio stories and music platform for kids 3-8 years old." />
                    <meta name="keywords" content="Screen free activities, Vobble audio stories, audio stories, screen free audio stories, screen free stories, stories for children, stories for kids, kids stories, children stories, Vobble" />
                    <meta name="author" content="Vobble" />

                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                    <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Antonio:wght@300;400;500;600;700&family=Karla:wght@300;400;500;600;700;800&family=Oswald:wght@300;400;500;600;700&family=Delius+Unicase:wght@400;700&family=Space+Grotesk:wght@300;400;500;600;700&family=Gaegu:wght@300;400;700&family=Indie+Flower&family=Quicksand:wght@400;600;700&family=Syne:wght@400;700&family=Yatra+One&display=swap" rel="stylesheet" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument