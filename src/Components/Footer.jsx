
import '../Style/Footer.css';

const Footer = () => {
    const thisYear = () => {
        const year = new Date().getFullYear();
        return year
    };

    return (
        <div className='footer-total-wrapper'>
            <div className='footer-wrapper'>
                <div className='footer-content'>
                    <div className='footer-high-content'><p>중부대학교 게임소프트웨어학과 졸업작품</p></div>
                    <div className='footer-middle-content'>
                        <p>팀명: R.I.P | 광고문의: 010-2650-6091 | Email: pycandyq@naver.com</p>
                    </div>
                    <div className='footer-low-content'><p>주소: 28912 경기도 고양시 덕양구 대자동 중부대학교 </p></div>
                    <p>Copyright &copy; <span>{thisYear()}</span></p>
                </div>
            </div>
        </div>
    )
};

export default Footer;