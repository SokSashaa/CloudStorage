import {NextPage} from "next";
import {checkAuth} from "@/_utils/checkAuth";
import {FileList} from "@/_components/FileList/FileList";
import * as Api from '@/_api'

const DashboardPage: NextPage = () => {
    checkAuth()
    return (<>
        <h1>Files</h1>
        <FileList/>
    </>)


}


export default DashboardPage



