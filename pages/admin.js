import dynamic from "next/dynamic";
import config from "../cms/config";
import { Control, Preview } from "../components/cms/customWidget";

const CMS = dynamic(
    () => import('netlify-cms-app').then((cms) => {
        cms.registerWidget('test', Control, Preview);
        cms.init({ config });
    }),
    { ssr: false, loading: () => <p>Loading...</p> }
);

const AdminPage = () => {
    return (
        <>
            <CMS />
        </>
    )
}

export default AdminPage;