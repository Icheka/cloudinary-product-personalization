import Head from 'next/head';
import { App, AppAuthor } from '../../configs/app';


const Page = ({ pageTitle, component, children, fullScreen }) => {
    return (
        <div className={`min-h-screen relative ${fullScreen && 'h-screen'} max-w-full`}>
            <Head>
                <meta name="author" content={AppAuthor.fullName} />
                <meta name="description" content={App.description} />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />

                <title>{ pageTitle || App.title }</title>
            </Head>
            <div className={``}>
                { component || children }
            </div>
        </div>
    );
};

export default Page;