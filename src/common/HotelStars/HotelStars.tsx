
export const hotelStars = (stars: number) => {
    return (
        <div>  {
            stars === 1 ? <div>
                <span className="fa fa-star" style={{ color: '#f3da35' }}></span>
                <span className="fa fa-star" ></span>
                <span className="fa fa-star" ></span>
                <span className="fa fa-star" ></span>
                <span className="fa fa-star" ></span>
            </div> : stars === 2 ? <div>
                <span className="fa fa-star" style={{ color: '#f3da35' }}></span>
                <span className="fa fa-star" style={{ color: '#f3da35' }}></span>
                <span className="fa fa-star" ></span>
                <span className="fa fa-star" ></span>
                <span className="fa fa-star" ></span>
            </div> : stars === 3 ? <div>
                <span className="fa fa-star" style={{ color: '#f3da35' }}></span>
                <span className="fa fa-star" style={{ color: '#f3da35' }}></span>
                <span className="fa fa-star" style={{ color: '#f3da35' }}></span>
                <span className="fa fa-star" ></span>
                <span className="fa fa-star" ></span>
            </div> : stars === 4 ? <div>
                <span className="fa fa-star" style={{ color: '#f3da35' }}></span>
                <span className="fa fa-star" style={{ color: '#f3da35' }}></span>
                <span className="fa fa-star" style={{ color: '#f3da35' }}></span>
                <span className="fa fa-star" style={{ color: '#f3da35' }}></span>
                <span className="fa fa-star" ></span>
            </div> : stars === 5 ? <div>
                <span className="fa fa-star" style={{ color: '#f3da35' }}></span>
                <span className="fa fa-star" style={{ color: '#f3da35' }}></span>
                <span className="fa fa-star" style={{ color: '#f3da35' }}></span>
                <span className="fa fa-star" style={{ color: '#f3da35' }}></span>
                <span className="fa fa-star" style={{ color: '#f3da35' }}></span>
            </div> : <div>
                <span className="fa fa-star" ></span>
                <span className="fa fa-star" ></span>
                <span className="fa fa-star" ></span>
                <span className="fa fa-star" ></span>
                <span className="fa fa-star" ></span>
            </div>
        }
        </div>
    )
}
