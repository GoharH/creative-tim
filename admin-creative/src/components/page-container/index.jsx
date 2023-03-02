import Footer from "../footer"
import Header from "../header"
import './style.scss';

const PageContainer = ({ children, title }) => {

    return <div className="P-page-container">
        <Header title={title} />

        <div className="P-main-pages G-wrapper-page">
            {children}
        </div>
        <Footer />

    </div>
}
export default PageContainer