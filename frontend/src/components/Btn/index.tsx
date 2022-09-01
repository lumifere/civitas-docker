import './style.css';

type BtnInfo = {
    className: string,
    value: string,
};

function Btn({className, value}: BtnInfo) {
    return ( 
        <div>
            <form>
                <input type="submit" value={value} className={className} />
            </form> 
        </div>
    );
};

export default Btn;