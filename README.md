<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->

<a name="readme-top" id="readme-top"></a>

<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

[![ĐÓNG GÓP][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://unknown-movie-client.vercel.app/">
   <div  style="background-color: black; width: 80px; height:30px"> <img src="./public/img/unknown-logo.svg" alt="Logo" width="80" height="80"></div>
  </a>

  <h3 align="center">UNKNOWN MOVIE TICKET WEBSITE</h3>

  <p align="center">
    Một dự án học tập cuối khoá của
    <br />
    <a href="https://lehuynhqui.vercel.app/"><strong>LÊ HUỲNH QUÍ »</strong></a>
    <br />
    <br />
    <a href="https://unknown-movie-client.vercel.app/">View Demo</a>
    ·
    <a href="https://github.com/HuynhQuiLe/unknown-movie-client">Source Code</a>
    ·
    <a href="https://www.facebook.com/lehuynhqui99">Contact Me</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Mục Lục</summary>
  <ol>
    <li>
      <a href="#thông-tin-chung-về-dự-án">Thông Tin Chung Về Dự Án</a>
      <ul>
        <li><a href="#được-viết-bằng">Được Viết Bằng</a></li>
      </ul>
    </li>
    <li><a href="#source-code-và-deployments">Source Code Và Deployments</a></li>
    <li><a href="#trường-hợp-back-end-deployment-bị-lỗi">Trường Hợp Back End Deployment Bị Lỗi</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#liên-hệ">Liên Hệ</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## Thông Tin Chung Về Dự Án

![Getting Started](/public/img/Screenshot%202023-10-20%20at%2008.21.51.png)

Đây là dự án học tập cuối khoá để chuẩn bị xin việc với vị trí <b>FRONT END</b>. Tuy nhiên vì lý do API dùng chung cho quá nhiều học viên, dẫn đến tình trạng chất lượng hình ảnh cũng các tài nguyên khác bị test quá nhiều, làm cho nội dung hiển thị không còn đẹp và chuyên nghiệp. Đó là lí do em viết cả code <b>BACK END</b>. Vì lý do đó, các nhà tuyển dụng vui lòng chỉ chấm điểm về phía <b>FRONT END</b> cho dự án này.

Tiêu chí của dự án:

- Simple is the best: em hướng tới thiết kế đơn giản nhất. nhưng vẫn đảm bảo đầy đủ các tính năng.
- Source code sẽ được update liên tục
- Hướng tới 1 website có độ thực tế cao nhất có thể - không chỉ dừng lại ở mức độ dự án cuối khoá (Phim đang chiếu và sắp chiếu sẽ được cập nhật liên tục)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Được Viết Bằng

Dự án được viết bằng nhiều frameworks/libraries, trong đó có thể kể đến như:

- [![React][React.js]][React-url]
- [![Bootstrap][Bootstrap.com]][Bootstrap-url]
- [![HTML5][HTML5.com]][HTML5-url]
- [![MongoDB][MongoDB.io]][MongoDB-url]
- [![ExpressJS][ExpressJS.io]][ExpressJS-url]
- [![NodeJS][NodeJS.dev]][NodeJS-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Source Code Và Deployments

Dự án được chia làm 2 phần chính: Front end và Back end. Front end được chia làm 2 trang chính: Admin và Client.

1. BACK END <br/>
   1.1 [Source Code](https://github.com/HuynhQuiLe/unknown-movie-API.git) <br/>
   1.2 [Deployment]() - Đang cập nhật <br/>

2. FRONT END <br/>
   2.1 TRANG ADMIN <br/>
   2.1.1 [Source Code](https://github.com/HuynhQuiLe/unknown-movie-admin) <br/>
   2.1.2 [Deployment](https://unknown-movie-admin.vercel.app/)<br/>
   2.2 TRANG CLIENT <br/>
   2.2.1 [Source Code](https://github.com/HuynhQuiLe/unknown-movie-client) <br/>
   2.2.2 [Deployment](https://unknown-movie-client.vercel.app/) <br/>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Trường Hợp Back End Deployment Bị Lỗi

_Như đã được đề cập từ trước, Dự án này đựợc em viết cả phần Back end. Kiến thức Back end của em là hoàn toàn tự học, nên khi deploy có thể sẽ dẫn tới sai xót. Vì vậy trong trường hợp có lỗi xảy ra, anh chị vui lòng:_

1. Clone source code back end về

```sh
  git clone https://github.com/HuynhQuiLe/unknown-movie-API.git
```

2. Mở terminal và chạy
   ```sh
   npm install
   ```
3. Chạy dự án back end
   ```sh
   npm run dev
   ```
4. Clone source code front end - client về

```sh
  git clone https://github.com/HuynhQuiLe/unknown-movie-client.git
```

5. Vào thư mục `service` vào file `configService.js` và thay đổi tất cả url có domain chính thành:` http://localhost:6868/`

   ```js
   export const USER_BASE_URL = "http://localhost:6868/users";
   ```

6. Mở terminal và chạy

   ```sh
   npm install
   npm start
   ```

7. Clone source code front end - admin về

```sh
  git clone https://github.com/HuynhQuiLe/unknown-movie-admin.git
```

8. Vào thư mục `service` vào file `configService.js` và thay đổi tất cả url có domain chính thành:` http://localhost:6868/`

   ```js
   export const CAROUSEL_BASE_URL = "http://localhost:6868/carousels";
   ```

9. Mở terminal và chạy
   ```sh
   npm install
   npm start
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## License

Copyright © 2023 LÊ HUỲNH QUÍ (CHRIS). All rights reserved.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Liên Hệ

LÊ HUỲNH QUÍ (CHRIS) - [@my_facebook](https://www.facebook.com/lehuynhqui99) - lehuynhqui1996@gmail.com

Project Link: [https://github.com/HuynhQuiLe/unknown-movie-client.git](https://github.com/HuynhQuiLe/unknown-movie-client.git)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge
[contributors-url]: https://github.com/othneildrew/Best-README-Template/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=for-the-badge
[forks-url]: https://github.com/othneildrew/Best-README-Template/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=for-the-badge
[stars-url]: https://github.com/othneildrew/Best-README-Template/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=for-the-badge
[issues-url]: https://github.com/othneildrew/Best-README-Template/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/othneildrew
[product-screenshot]: images/screenshot.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[MongoDB.io]: https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white
[MongoDB-url]: https://account.mongodb.com/
[NodeJS.dev]: https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white
[NodeJS-url]: https://nodejs.org/en
[ExpressJS.io]: https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB
[ExpressJS-url]: https://expressjs.com/
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[HTML5.com]: https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white
[HTML5-url]: https://html5up.net/
