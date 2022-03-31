import IonIcon from '../component/IonIcon';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {adminMenu} from '../constants/menu';


export default function AdminLayout({children}) {
    const router = useRouter();
    const paths = router.pathname.split("/");
    return (
        <div className="flex h-screen">
            <div className="w-60 flex flex-col">
                <div className="text-lg font-bold p-4">
                    ReenDocs
                </div>
                {
                    adminMenu.map(m => (
                        <div key={m.url} className="my-1 mx-3 text-sm">
                            <Link href={`/${m.url}`} passHref={true}>
                                <div className={`${paths.includes(m.url) ? "bg-slate-200" : "hover:bg-slate-100"} rounded-xl p-2.5 flex items-center cursor-pointer`}>
                                    <IonIcon name={m.icon} className="mr-3"/>
                                    <p>{m.title}</p>
                                </div>
                            </Link>
                            {
                                !m.submenu || (!paths.includes(m.url))? null:
                                m.submenu.map(sm => (
                                    <Link href={`/${m.url}/${sm.url}`}  passHref={true} key={sm.url}>
                                        <div className={`${paths.includes(sm.url) ? "font-black" : "hover:font-black"} font-bold rounded-xl py-2 pl-9 flex items-center cursor-pointer text-xs`}>
                                            <p>{sm.title}</p>
                                        </div>
                                    </Link>
                                ))
                            }
                        </div>
                    ))
                }
            </div>
            <div className="flex-grow flex flex-col bg-slate-200">
                {children}
            </div>
        </div>
    )
}