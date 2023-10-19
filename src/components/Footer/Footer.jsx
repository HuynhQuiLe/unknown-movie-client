import React from "react";
import { useParams } from "react-router-dom";

const Footer = () => {
  const params = useParams();
  if (params?.id) return null;
  return (
    <footer className=" text-[#6e6e73] bg-[#f5f5f7]">
      <div className="container max-w-[1024px] p-[0 22px] m-auto">
        <div className="footer__top">
          <p>
            <b>UNKNOWN</b> là một trong năm doanh nghiệp quản lý vé phim lớn
            nhất toàn cầu và <b>UNKNOWN Việt Nam </b>
            là Nhà Phát Hành, nhà quản lý và vận hành các Cụm Rạp Chiếu Phim lớn
            nhất tại Việt Nam. Mục tiêu của <b>UNKNOWN Việt Nam </b> là trở
            thành công ty giải trí điển hình, đóng góp cho sự phát triển không
            ngừng của lĩnh vực điện ảnh Việt Nam nói riêng và công nghiệp văn
            hóa mang đậm bản sắc Việt Nam nói chung.
            {/* 2. Qualified Purchasers receive an Apple
            Gift Card when they purchase an eligible Mac or iPad at a Qualifying
            Location. Only one Apple Gift Card per eligible Mac or iPad per
            Qualified Purchaser. Offer subject to availability. While supplies
            last. View full terms and conditions of offer <a href="/">here</a>. */}
          </p>
          <p>
            <b>UNKNOWN Việt Nam </b> hội nhập, hài hòa và góp phần tạo nên khái
            niệm độc đáo về việc chuyển đổi cụm rạp chiếu phim truyền thống
            thành tổ hợp văn hóa <b>“Cultureplex”</b>, nơi khán giả không chỉ
            đến để thưởng thức điện ảnh đa dạng thông qua các công nghệ tiên
            tiến như <b>SCREENX, IMAX, STARIUM, 4DX, Dolby Atmos,</b> mà còn để
            thưởng thức ẩm thực hoàn toàn mới và khác biệt với các trải nghiệm
            dịch vụ chất lượng nhất tại các Cụm Rạp Chiếu Phim.
          </p>
          <p>
            <b>UNKNOWN Việt Nam </b>thông báo tiêu chí phân loại phim theo độ
            tuổi, như sau: <br />- T18: Phim được phổ biến đến người xem từ đủ
            18 tuổi trở lên (18+). <br />- T16: Phim được phổ biến đến người xem
            từ đủ 16 tuổi trở lên (16+).
            <br />- T13: Phim được phổ biến đến người xem từ đủ 13 tuổi trở lên
            (13+).
            <br />- K: Phim được phổ biến đến người xem dưới 13 tuổi và có người
            giám hộ đi kèm.
            <br />- P: Phim được phép phổ biến đến người xem ở mọi độ tuổi.
            <br />- C: Phim không được phép phổ biến.
          </p>
          <p>
            <b>HỆ THỐNG GIÁM SÁT CCTV</b> <br />
            Tại các Cụm Rạp Chiếu Phim, <b>UNKNOWN Việt Nam</b> có thể sẽ sử
            dụng hệ thống giám sát CCTV (như máy quay phim). Những máy quay phim
            CCTV của <b>UNKNOWN Việt Nam</b> có thể được đặt tại một vài vị trí
            công cộng của các Cụm Rạp Chiếu Phim nhằm ghi âm, ghi hình theo thời
            gian thực với mục đích góp phần bảo vệ trật tự, an toàn xã hội; bảo
            vệ quyền và lợi ích hợp pháp của các Cụm Rạp Chiếu Phim, của nhân
            viên, của <b>UNKNOWN Việt Nam</b> và của bạn theo quy định pháp
            luật; phòng, chống, xác định và điều tra những hành vi vi phạm tại
            các Cụm Rạp Chiếu Phim. Bằng cách tiếp tục hoạt động tại các Cụm Rạp
            Chiếu Phim, bạn chấp nhận để <b>UNKNOWN Việt Nam</b> thực hiện giám
            sát qua hệ thống CCTV và xử lý dữ liệu theo đúng mục đích đã được đề
            cập ở trên.
          </p>
          <p>
            Nếu có bất kỳ thắc mắc nào, vui lòng gọi vào đường dây nóng 24/7 tại{" "}
            <b>877-255-5923</b> để biết thêm nhiều thông tin về thẻ thành viên.
          </p>
          <p>
            Tìm hiểu thêm thông tin về Unknown Card applications, vui lòng truy
            cập <a href="/">support.unknown.com/kb/HT209218.</a>
          </p>
          <p>
            Để sử dụng <b>Apple TV+</b> bạn cần phải đăng ký thành viên.
          </p>
          <p>
            Đây là một sản phẩn học tập của{" "}
            <a
              href="https://lehuynhqui.vercel.app/"
              className=" no-underline text-blue-500 hover:underline"
              target="_blank"
            >
              <b>LÊ HUỲNH QUÍ (CHRIS)</b>
            </a>
            . Các nhãn hiệu và bản quyền của <b>UNKNOWN Việt Nam</b> được sử
            dụng với sự cho phép của <b>LÊ HUỲNH QUÍ (CHRIS)</b>.
            <br /> L.H.Q. All rights reserved.
          </p>
        </div>
        <div className="w-fulll h-[1px] bg-[#d2d2d7]"></div>
        <div className="footer__middle mt-3">
          <div className="footer__middle-col">
            <div className="footer__middle-col-blog">
              <p className="title">Phim và Đặt vé</p>
              <ul>
                <li>
                  <a className=" cursor-pointer">Phim đang chiếu</a>
                </li>
                <li>
                  <a className=" cursor-pointer">Phim sắp chiếu</a>
                </li>
                <li>
                  <a className=" cursor-pointer">Apple TV+</a>
                </li>
                <li>
                  <a className=" cursor-pointer">Đặt vé</a>
                </li>
                <li>
                  <a className=" cursor-pointer">Hổ trợ</a>
                </li>
                <li>
                  <a className=" cursor-pointer">Tìm kiếm</a>
                </li>
              </ul>
            </div>
            <div className="footer__middle-col-blog">
              <p className="title">Túi Unknown</p>
              <ul>
                <li>
                  <a className=" cursor-pointer">Unknown Túi</a>
                </li>
                <li>
                  <a className=" cursor-pointer">Unknown Card</a>
                </li>
                <li>
                  <a className=" cursor-pointer">Unknown Thanh Toán</a>
                </li>
                <li>
                  <a className=" cursor-pointer">Unknown Tinh Anh </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer__middle-col">
            <div className="footer__middle-col-blog">
              <p className="title">Tài khoản</p>
              <ul>
                <li>
                  <a className=" cursor-pointer">Quản lý tài khoản của bạn</a>
                </li>
                <li>
                  <a className=" cursor-pointer">Unknown lịch sử giao dịch</a>
                </li>
                <li>
                  <a className=" cursor-pointer">iUnknown.com</a>
                </li>
              </ul>
            </div>
            <div className="footer__middle-col-blog">
              <p className="title">Dịch vụ thêm</p>
              <ul>
                <li>
                  <a className=" cursor-pointer">Unknown One</a>
                </li>
                <li>
                  <a className=" cursor-pointer">Unknown TV+ </a>
                </li>
                <li>
                  <a className=" cursor-pointer">Unknown Music</a>
                </li>
                <li>
                  <a className=" cursor-pointer">Unknown Arcade </a>
                </li>
                <li>
                  <a className=" cursor-pointer">Unknown Fitness+ </a>
                </li>{" "}
                <li>
                  <a className=" cursor-pointer">Unknown News+ </a>
                </li>{" "}
                <li>
                  <a className=" cursor-pointer">Unknown Podcasts </a>
                </li>{" "}
                <li>
                  <a className=" cursor-pointer">Unknown Books </a>
                </li>{" "}
                <li>
                  <a className=" cursor-pointer">Unknown Store </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer__middle-col">
            <div className="footer__middle-col-blog">
              <p className="title">Cửa hàng Unknown</p>
              <ul>
                <li>
                  <a className=" cursor-pointer">Phone</a>
                </li>
                <li>
                  <a className=" cursor-pointer">Laptop</a>
                </li>
                <li>
                  <a className=" cursor-pointer">Computer</a>
                </li>
                <li>
                  <a className=" cursor-pointer"> Tablet </a>
                </li>
                <li>
                  <a className=" cursor-pointer">Headphone </a>
                </li>
                <li>
                  <a className=" cursor-pointer">Earphones </a>
                </li>
                <li>
                  <a className=" cursor-pointer">Watch </a>
                </li>
                <li>
                  <a className=" cursor-pointer">Vision</a>
                </li>
                <li>
                  <a className=" cursor-pointer">TV & Home </a>
                </li>
                <li>
                  <a className=" cursor-pointer">Accessories </a>
                </li>
                <li>
                  <a className=" cursor-pointer">Support</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer__middle-col">
            <div className="footer__middle-col-blog">
              <p className="title">Phim và Đặt vé</p>
              <ul>
                <li>
                  <a className=" cursor-pointer">Phim đang chiếu</a>
                </li>
                <li>
                  <a className=" cursor-pointer">Phim sắp chiếu</a>
                </li>
                <li>
                  <a className=" cursor-pointer">Apple TV+</a>
                </li>
                <li>
                  <a className=" cursor-pointer">Đặt vé</a>
                </li>
                <li>
                  <a className=" cursor-pointer">Hổ trợ</a>
                </li>
                <li>
                  <a className=" cursor-pointer">Tìm kiếm</a>
                </li>
              </ul>
            </div>
            <div className="footer__middle-col-blog">
              <p className="title">Túi Unknown</p>
              <ul>
                <li>
                  <a className=" cursor-pointer">Unknown Túi</a>
                </li>
                <li>
                  <a className=" cursor-pointer">Unknown Card</a>
                </li>
                <li>
                  <a className=" cursor-pointer">Unknown Thanh Toán</a>
                </li>
                <li>
                  <a className=" cursor-pointer">Unknown Tinh Anh </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer__middle-col">
            <div className="footer__middle-col-blog">
              <p className="title">Phim và Đặt vé</p>
              <ul>
                <li>
                  <a className=" cursor-pointer">Phim đang chiếu</a>
                </li>
                <li>
                  <a className=" cursor-pointer">Phim sắp chiếu</a>
                </li>
                <li>
                  <a className=" cursor-pointer">Apple TV+</a>
                </li>
                <li>
                  <a className=" cursor-pointer">Đặt vé</a>
                </li>
                <li>
                  <a className=" cursor-pointer">Hổ trợ</a>
                </li>
                <li>
                  <a className=" cursor-pointer">Tìm kiếm</a>
                </li>
              </ul>
            </div>
            <div className="footer__middle-col-blog">
              <p className="title">Túi Unknown</p>
              <ul>
                <li>
                  <a className=" cursor-pointer">Unknown Túi</a>
                </li>
                <li>
                  <a className=" cursor-pointer">Unknown Card</a>
                </li>
                <li>
                  <a className=" cursor-pointer">Unknown Thanh Toán</a>
                </li>
                <li>
                  <a className=" cursor-pointer">Unknown Tinh Anh </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <p>
          Nhiều cách săn vé hơn:{" "}
          <a className="text-blue-500 cursor-pointer">Tìm kiếm rạp phim</a> hoặc{" "}
          <a className="text-blue-500 cursor-pointer">phim đang thịnh hành</a>{" "}
          gần bạn. Hoặc gọi 1-968-MY-UNKNOWN.
        </p>
        <div className="w-full h-[1px] bg-[#d2d2d7]"></div>
        <div className="footer__bottom">
          <p>Copyright © 2023 LÊ HUỲNH QUÍ (CHRIS). All rights reserved.</p>
          <ul>
            <li>
              <a className=" cursor-pointer">Chính sách bảo mật</a>
            </li>
            <li>
              <a className=" cursor-pointer">Điều khoản</a>
            </li>
            <li>
              <a className=" cursor-pointer">Vé và Hoàn Tiền</a>
            </li>
            <li>
              <a className=" cursor-pointer">Pháp Lý </a>
            </li>
            <li>
              <a className=" cursor-pointer">Bản Đồ </a>
            </li>
          </ul>
          <a className=" cursor-pointer">Việt Nam</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
