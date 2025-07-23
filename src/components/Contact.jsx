import { Link } from "react-router-dom"
export const Contact = ({ name, phone, email, img, location }) => {
    return (
        <article className="container d-flex justify-content-between mb-2 border rounded-pill border-dark bg-warning">
            <header className="d-flex m-2">
                <img src={`${img}`} alt=""
                    style={{
                        width: "6rem",
                        borderRadius: "1rem",
                        marginInlineStart:"4rem"
                    }}
                />
                <div className="d-flex flex-column ms-5 mt-1 fs-5 gap-1 text-center">
                    <strong>➤ {name}</strong>
                    <span>📍 {location}</span>
                    <span>📞 {phone}</span>
                    <span>📧 {email}</span>
                </div>
            </header>
            <aside className="d-flex align-items-center me-5 gap-3">
                <Link className="btn  btn-lg btn-primary">📝</Link>
                <Link className="btn btn-lg btn-danger">🗑️</Link>
            </aside>
        </article>
    )
}