const NavbarItem = ({name,icon})=>{
    return(
        <div className="flex flex-col text-[#676767] items-center justify-center">
            <div>
                {icon}
            </div>
            <div className="vazir-medium">
                {name}
            </div>
        </div>
    )
}