import Link from "next/link"

export default function Card({ title, status, created, url }) {
    let statusColor = "green"
    if (status == 'Dead') {
        statusColor = "red"
    } 
    if (status == 'unknown') {
        statusColor = "gray"
    }

    return (
        <>
            <Link href={url} className="shadow-7xl md:max-desktopM:min-h-150 flex flex-col justify-between py-5 px-8 max-w-788 max-h-262 md:max-desktopM:min-w-[480px] ">
                <div className="">
                    <p className="text-2xl max-[1920]:text-3xl max-tablet:text-[18px] max-tablet:mb-[5px]">{title}</p>
                </div>
                <div className="flex justify-between">
                    <p className="font-bold text-gray">Status: <span className={statusColor}>{status}</span></p>
                    <p className="font-bold text-gray">Created:  {created}</p>
                </div>
            </Link>
        </>
    )
}

