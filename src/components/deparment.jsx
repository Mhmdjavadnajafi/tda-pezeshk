const Depatment = ({ imgSrc, onClick }) => {
    return (
        <div className="col-span-4 mt-1">
            <img onClick={onClick}
                className="h-auto w-full object-fit rounded-md"
                src={imgSrc}
                alt="department"
            />

        </div>
    );
};

export default Depatment;
