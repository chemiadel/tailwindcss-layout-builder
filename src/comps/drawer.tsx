export default function Header({
    style
}:{
    style: string
}){

    return <div className={style}>
        <div className="flex flex-row  items-center h-16 px-4 space-x-3 border-b">
        <div className="rounded-full p-2 cursor-pointer hover:bg-gray-100">
            <svg className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
        </div>
        <h1 className="text-2xl font-bold flex-grow">Logo</h1>
        <button className="text-lg font-bold border p-2"> Login </button>
    </div>
    </div>
}
