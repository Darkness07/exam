import React, { useEffect, useState } from 'react'
import car1 from './img/zyro-image 1.png'
import car2 from './img/zyro-image 2.png'
import './home.scss'
import Slider from 'react-slick'
import linkImg from './img/linkImg'
export default function Home() {
  const [widthWindow, setWidthWindow] = useState(0)

  useEffect(() => {
    setWidthWindow(window.innerWidth)
  }, [])

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow:
      widthWindow >= 1000 ? 4 :
        widthWindow >= 800 ? 3 : 2,
    slidesToScroll: 2
  };
  return (
    <div className='Home'>
      {/* Banner/////////////////// */}
      <div className="Banner">
        <div className="main">
          <img src={car1} alt="" />
          <div className="mainRight">
            <h2>Авто из Кореи и Китая</h2>
            <p>Мы предоставляем вам возможность <br /> найти идеальный автомобиль <br /> специально под ваш вкус.</p>
            <div className="mainRightBott">
              <div className="block c1">
                <h3>150+</h3>
                <p>Видов машин из кореи</p>
              </div>
              <div className="block c2">
                <h3>100K+</h3>
                <p>Клиентов</p>
              </div>
            </div>
          </div>
        </div>
        <svg className='svg_1' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1390 403" fill="none">
          <animate
            attributeType='XML'
            attributeName='stroke-dasharray'
            from='0 10000'
            to='10000 0'
            dur='16s'
            repeatCount='1'
          />
          <path d="M0.997703 402.121C57.4264 311.682 204.831 152.229 343.019 237.934C481.208 323.638 632.787 191.591 691.303 114.855C739.167 57.0234 881.779 -18.3876 1069.32 142.621C1256.85 303.63 1465.68 101.183 1546.65 -20.1664" stroke="#444444" stroke-opacity="0.27" />
          <path d="M-129.002 253.906C-56.8038 291.061 128.024 337.279 289.753 224.911C451.482 112.543 572.107 237.591 612.204 314.16C674.667 377.144 841.986 430.059 1011.55 137.857C1181.12 -154.346 1436.89 89.6256 1543.58 248.137" stroke="#1B67FB" />
          <path d="M0.781351 354.222C56.0041 275.168 202.346 134.313 345.931 203.323C489.516 272.334 633.182 161.986 687.066 98.1853C733.741 51.0777 875.637 -12.7483 1069.83 108.808C1264.02 230.364 1467.75 67.3948 1545.34 -29.2846" stroke="#414754" stroke-opacity="0.33373" />
          <path d="M0.622862 314.298C55.1427 246.118 201.223 122.986 349.383 175.897C497.544 228.807 634.529 139.409 684.502 88.0964C730.461 51.244 872.161 -1.5305 1071.29 82.1907C1270.42 165.912 1470.86 40.7238 1546.18 -32.3353" stroke="#3D4A63" stroke-opacity="0.394563" />
          <path d="M-4.459 300.103C49.7983 242.274 196.311 135.976 348.303 173.418C500.294 210.859 631.716 141.607 678.428 102.301C724.088 75.2207 866.045 32.9521 1068.6 80.5161C1271.15 128.08 1469.86 38.9229 1543.89 -11.6012" stroke="#3A4D72" stroke-opacity="0.4525" />
          <path d="M-19.4467 280.059C34.9283 232.047 182.467 141.683 337.619 164.32C492.771 186.957 619.634 136.997 663.671 109.187C709.391 91.3867 851.991 59.0697 1056.63 72.2042C1261.26 85.3387 1459.62 30.4185 1533.22 1.31665" stroke="#375080" stroke-opacity="0.50754" />
          <path d="M-34.1423 248.387C20.6737 209.654 169.734 134.317 327.448 142.841C485.162 151.364 608.361 119.802 650.246 102.956C696.334 93.9345 839.901 71.0097 1045.47 51.4812C1251.03 31.9527 1450.2 9.44442 1524.09 0.631325" stroke="#34528D" stroke-opacity="0.559683" />
          <path d="M-48.2196 227.713C7.30647 197.714 158.295 136.498 318.04 131.623C477.785 126.748 598.111 112.656 638.306 106.219C685.018 105.471 829.817 91.3768 1035.32 40.982C1240.83 -9.41281 1441.8 -1.35668 1516.6 8.97074" stroke="#315499" stroke-opacity="0.608929" />
          <path d="M-60.7521 226.444C-4.29793 204.635 148.938 156.634 310.248 139.095C471.558 121.557 589.705 123.977 628.615 127.379C676.158 134.396 822.4 128.571 1027.02 49.1283C1231.64 -30.3141 1435.21 6.44555 1511.42 34.7557" stroke="#2E57A5" stroke-opacity="0.655278" />
          <path d="M-69.7705 227.739C-12.2181 213.577 143.505 177.891 305.977 148.439C468.449 118.987 585.015 136.939 622.989 149.597C671.528 163.871 819.369 165.754 1022.42 59.0979C1225.48 -47.5579 1432.3 16.0378 1510.32 61.1676" stroke="#2C59B0" stroke-opacity="0.69873" />
          <path d="M-77.7446 230.145C-18.9686 223.088 139.406 198.823 302.694 158.222C465.983 117.621 581.478 150.107 618.815 171.425C668.47 192.446 818.019 201.482 1018.98 69.4561C1219.93 -62.5701 1430.48 25.994 1510.63 86.7793" stroke="#2A5BBA" stroke-opacity="0.739286" />
          <path d="M-85.1475 233.166C-25.0641 232.674 136.056 218.947 299.872 167.972C463.687 116.997 578.538 163.003 615.487 192.378C666.34 219.641 817.661 235.278 1016.12 79.7296C1214.58 -75.8191 1429.18 35.8501 1511.67 111.128" stroke="#285DC3" stroke-opacity="0.776944" />
          <path d="M-91.9824 234.802C-30.5466 240.341 133.351 236.279 297.453 175.712C461.556 115.146 576.113 173.648 612.878 210.47C664.975 243.47 818.089 265.165 1013.77 87.9419C1209.45 -89.2813 1428.31 43.638 1513.29 132.251" stroke="#265ECC" stroke-opacity="0.811706" />
          <path d="M-98.2461 238.05C-35.448 249.092 131.198 253.833 295.396 184.464C459.595 115.095 574.135 185.062 610.88 228.716C664.233 266.954 819.123 294.167 1011.86 97.1146C1204.59 -99.9379 1427.8 52.3881 1515.31 153.183" stroke="#2460D4" stroke-opacity="0.843571" />
          <path d="M-103.942 239.912C-39.8046 255.932 129.508 268.627 293.654 191.249C457.8 113.872 572.535 194.265 609.384 244.133C663.975 287.114 820.589 319.314 1010.32 104.272C1200.05 -110.77 1427.56 59.1326 1517.6 170.964" stroke="#2261DB" stroke-opacity="0.87254" />
          <path d="M-109.068 242.387C-43.6419 262.867 128.206 282.678 292.192 198.089C456.178 113.499 571.259 203.277 608.302 258.74C664.084 305.971 822.34 342.634 1009.1 111.436C1195.86 -119.762 1427.53 65.9015 1520.02 187.633" stroke="#2162E2" stroke-opacity="0.898611" />
          <path d="M-113.625 244.477C-46.9892 268.904 127.221 295.007 290.974 204.005C454.727 113.004 570.252 211.123 607.546 271.558C664.45 322.554 824.234 363.163 1008.14 117.632C1192.04 -127.898 1427.65 71.7275 1522.46 202.231" stroke="#2064E8" stroke-opacity="0.921786" />
          <path d="M-117.611 246.182C-49.866 274.048 126.494 305.628 289.973 209.015C453.452 112.402 569.472 217.819 607.047 282.604C664.979 336.882 826.156 380.926 1007.4 122.88C1188.64 -135.166 1427.86 76.6363 1524.82 214.793" stroke="#1E65ED" stroke-opacity="0.942064" />
          <path d="M-121.028 247.498C-52.2952 278.302 125.968 314.555 289.161 213.133C452.354 111.71 568.875 223.379 606.737 291.891C665.586 348.974 827.996 395.95 1006.84 127.196C1185.68 -141.558 1428.13 80.65 1527 225.348" stroke="#1D65F1" stroke-opacity="0.959444" />
          <path d="M-123.877 248.429C-54.295 281.674 125.598 321.806 288.516 216.376C451.434 110.945 568.428 227.822 606.56 299.44C666.199 358.853 829.665 408.264 1006.42 130.6C1183.17 -147.063 1428.41 83.7942 1528.93 233.931" stroke="#1D66F5" stroke-opacity="0.973929" />
          <path d="M-126.155 249.975C-55.8761 285.167 125.349 328.392 288.023 219.756C450.697 111.119 568.105 232.162 606.475 306.263C666.761 367.536 831.09 418.887 1006.12 134.106C1181.15 -150.675 1428.67 87.0874 1530.56 241.566" stroke="#1C67F8" stroke-opacity="0.985516" />
          <path d="M-127.863 251.134C-57.052 287.783 125.189 333.322 287.666 222.281C450.142 111.241 567.882 235.406 606.443 311.37C667.224 374.035 832.212 426.838 1005.91 136.725C1179.62 -153.389 1428.89 89.543 1531.82 247.273" stroke="#1B67FA" stroke-opacity="0.994206" />
        </svg>
      </div>
      {/* Banner/////////////////// */}
      <div className='bigHr' ></div>
      {/* Marka//////////////////// */}
      <div className="Marka">
        <h1 >Найдите авто по <b>марке</b></h1>
        <Slider className='slider' {...settings}>
          <div className="block">
            <a href="">
              <img src={linkImg.geely} alt="" />
              <hr />
              <h2>Geely</h2>
            </a>
          </div>
          <div className="block">
            <a href="">
              <img src={linkImg.honda} alt="" />
              <hr />
              <h2>Honda</h2>
            </a>
          </div>
          <div className="block">
            <a href="">
              <img src={linkImg.bmw} alt="" />
              <hr />
              <h2>BMW</h2>
            </a>
          </div>
          <div className="block">
            <a href="">
              <img src={linkImg.kia} alt="" />
              <hr />
              <h2>KIA</h2>
            </a>
          </div>
          <div className="block">
            <a href="">
              <img src={linkImg.kia} alt="" />
              <hr />
              <h2>KIA</h2>
            </a>
          </div>
        </Slider>
      </div>
      {/* Marka//////////////////// */}

      {/* class//////////////////// */}
      <div className="class">
        <h1>Найдите авто по <b>классам</b></h1>
        <div className="main">
          <div style={{ width: widthWindow / 6 + 10 }} className="block">
            <div style={{ width: widthWindow / 6 - 10, height: widthWindow / 6 - 10 }} className="img_block c1">

            </div>
            <div className="svgOther">
              <svg width="317" height="104" viewBox="0 0 317 104" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.071347 95.407C12.0624 66.8019 34.1179 42.199 63.1122 25.0851C92.1064 7.97111 126.569 -0.785804 161.615 0.0553704C196.661 0.896545 230.513 11.2931 258.374 29.7717C286.235 48.2503 306.692 73.8736 316.844 103.01L314.447 103.64C304.446 74.9405 284.297 49.7016 256.854 31.5002C229.411 13.2987 196.066 3.0581 161.545 2.22954C127.025 1.40099 93.0798 10.0265 64.5205 26.8838C35.9612 43.7411 14.2365 67.9749 2.42528 96.1509L0.071347 95.407Z" fill="#007FD5" />
              </svg>
            </div>
          </div>
          <div style={{ width: widthWindow / 6 + 10 }} className="block">
            <div style={{ width: widthWindow / 6 - 10, height: widthWindow / 6 - 10 }} className="img_block c2"></div>

            <div className="svgOther c2">
              <svg width="317" height="104" viewBox="0 0 317 104" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.071347 95.407C12.0624 66.8019 34.1179 42.199 63.1122 25.0851C92.1064 7.97111 126.569 -0.785804 161.615 0.0553704C196.661 0.896545 230.513 11.2931 258.374 29.7717C286.235 48.2503 306.692 73.8736 316.844 103.01L314.447 103.64C304.446 74.9405 284.297 49.7016 256.854 31.5002C229.411 13.2987 196.066 3.0581 161.545 2.22954C127.025 1.40099 93.0798 10.0265 64.5205 26.8838C35.9612 43.7411 14.2365 67.9749 2.42528 96.1509L0.071347 95.407Z" fill="#007FD5" />
              </svg>
            </div>
          </div>
          <div style={{ width: widthWindow / 6 + 10 }} className="block">
            <div style={{ width: widthWindow / 6 - 10, height: widthWindow / 6 - 10 }} className="img_block c3"></div>

            <div className="svgOther">
              <svg width="317" height="104" viewBox="0 0 317 104" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.071347 95.407C12.0624 66.8019 34.1179 42.199 63.1122 25.0851C92.1064 7.97111 126.569 -0.785804 161.615 0.0553704C196.661 0.896545 230.513 11.2931 258.374 29.7717C286.235 48.2503 306.692 73.8736 316.844 103.01L314.447 103.64C304.446 74.9405 284.297 49.7016 256.854 31.5002C229.411 13.2987 196.066 3.0581 161.545 2.22954C127.025 1.40099 93.0798 10.0265 64.5205 26.8838C35.9612 43.7411 14.2365 67.9749 2.42528 96.1509L0.071347 95.407Z" fill="#007FD5" />
              </svg>
            </div>
          </div>
          <div style={{ width: widthWindow / 6 + 10 }} className="block">
            <div style={{ width: widthWindow / 6 - 10, height: widthWindow / 6 - 10 }} className="img_block c4"></div>

            <div className="svgOther c2">
              <svg width="317" height="104" viewBox="0 0 317 104" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.071347 95.407C12.0624 66.8019 34.1179 42.199 63.1122 25.0851C92.1064 7.97111 126.569 -0.785804 161.615 0.0553704C196.661 0.896545 230.513 11.2931 258.374 29.7717C286.235 48.2503 306.692 73.8736 316.844 103.01L314.447 103.64C304.446 74.9405 284.297 49.7016 256.854 31.5002C229.411 13.2987 196.066 3.0581 161.545 2.22954C127.025 1.40099 93.0798 10.0265 64.5205 26.8838C35.9612 43.7411 14.2365 67.9749 2.42528 96.1509L0.071347 95.407Z" fill="#007FD5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      {/* class//////////////////// */}

      {/* Advantages/////////////// */}
      <div className="Advantages">
        <h1>Преимущества <b>автомобилей</b></h1>
        <div className="main">
          <div className="bl_ul">
            <div className="block">
              <h3>Об авто</h3>
              <p>Новый Geely Monjaro - флагманский кроссовер класса SUV-D . Модель сочетает в себе внушительный дизайн с просторным салоном премиального  уровня.</p>
            </div>
            <div className="block">
              <h3>Двигатель</h3>
              <p>2-литровый турбированный двигатель мощьностью 238 л.c. скомпонован с классическим 8-диапазонным “автоматом” и системой полного привода.</p>
            </div>
            <div className="block">
              <h3>Комплектации</h3>
              <p>Комплектации нового “Джили Монджаро” в продаже у официальных дилеров в Минске и регионах - максимальные.</p>
            </div>
          </div>
          <div className="center_img">
            <img src={car2} alt="" />
          </div>
          <div className="bl_ul">
            <div className="block">
              <h3>Технологические иновации</h3>
              <p>Безопасность, динамика
                и конечно роскошный интерьер - все
                в Geely Monjaro на самом
                высоком уровне.</p>
            </div>
            <div className="block">
              <h3>Вид изнутри</h3>
              <p>Открывающийся панорамный
                люк с защитой от защемления -
                любуйтесь великолепием
                неба над вашей головой
                во время езды.</p>
            </div>
            <div className="block">
              <h3>Автономная система</h3>
              <p>Geely Monjaro способен избавить
                вас от сложностейпарковки
                благодаря Автономной
                системе помощи при парковке
                (АРА)</p>
            </div>
          </div>

        </div>
      </div>
      {/* Advantages/////////////// */}

      {/* best-selling///////////// */}
      <div className="bestSelling">
        <h1>Самые продаваемые автомобили</h1>
        <div className="main">
          <div className="block">
            <img src={linkImg.bestSelling_1} alt="" />
          </div>
          <div className="block">
            <img src={linkImg.bestSelling_2} alt="" />
          </div>
          <div className="block">
            <img src={linkImg.bestSelling_3} alt="" />
          </div>
          <div className="block">
            <img src={linkImg.bestSelling_4} alt="" />
          </div>
        </div>
      </div>
      {/* best-selling///////////// */}

      {/* exactly////////////////// */}
      <div className="exactly">
        <h1>Почему именно <b>JLD MOTORS?</b></h1>
        <div className="main">
          <div className="block">
            <svg xmlns="http://www.w3.org/2000/svg" width="114" height="75" viewBox="0 0 114 75" fill="none">
              <path d="M7.86209 35.9958H55.0346V39.3577H7.86209V35.9958ZM0 15.8241H39.3104V19.186H0V15.8241Z" fill="#EEEEEE" />
              <path d="M113.682 36.4592L101.889 12.9256C101.586 12.3207 101.082 11.8051 100.44 11.443C99.7978 11.0808 99.0453 10.8879 98.276 10.8882H86.4829V4.16434C86.4829 3.2727 86.0687 2.41757 85.3315 1.78709C84.5943 1.1566 83.5944 0.802395 82.5519 0.802395H19.6552L19.6552 4.05716H80.0414L80.5863 51.2387C78.7951 52.1283 77.9089 53.1904 76.6553 54.6007C75.4017 56.0109 75.2129 59.6105 74.6898 61.3246H46.6143C45.6575 58.1554 43.382 52.0244 40.2145 50.1874C37.0469 48.3503 33.2047 47.5644 29.4081 47.9768C25.6114 48.3892 22.121 49.9717 19.591 52.4277C17.061 54.8836 15.6652 58.0443 15.6652 61.3174C15.6652 64.5905 17.061 67.7513 19.591 70.2072C22.121 72.6631 25.6114 74.2456 29.4081 74.658C33.2047 75.0704 37.0469 74.2845 40.2145 72.4475C43.382 70.6105 45.6575 67.8485 46.6143 64.6794H71.3169C76.6554 65.4402 75.8741 66.9742 78.6209 68.8022C81.3677 70.6302 83.4604 70.4831 84.5175 70.4831C86.4829 71.2961 90.2732 71.6066 93.02 69.7786C95.7668 67.9506 97.4209 66.6444 98.276 63.759L110.069 64.6794C111.112 64.6794 112.112 64.3252 112.849 63.6947C113.586 63.0642 114 62.2091 114 61.3174V37.7838C114 37.3283 113.892 36.8776 113.682 36.4592ZM33.4138 70.4829C31.8588 70.4829 28.8102 69.5408 27.5173 68.802C26.2243 68.0631 24.1813 67.5961 23.5862 66.3675C22.9911 65.1389 21.3173 62.6289 21.6207 61.3246C21.6207 61.3246 20.5212 57.222 21.6207 56.2816C22.7202 55.3413 25.9922 53.1791 27.5173 52.9197C29.0423 52.6603 33.9427 52.4108 35.3793 52.9197C36.8159 53.4286 39.3506 54.8708 40.2145 55.9765C41.0784 57.0823 43.2414 59.9947 43.2414 61.3246C43.2393 63.1073 41.6885 66.6141 40.2145 67.8746C38.7405 69.1352 35.4983 70.4812 33.4138 70.4829ZM82.4929 17.6121L98.2171 15.9311L108.045 34.4219H82.4929V17.6121ZM86.4829 68.0413C84.9279 68.0413 83.4079 67.647 82.115 66.9081C80.822 66.1693 79.8143 65.1192 79.2193 63.8905C78.6242 62.6619 78.4685 61.31 78.7719 60.0056C79.0752 58.7013 79.824 57.5033 80.9236 56.5629C82.0231 55.6226 83.424 54.9822 84.9491 54.7227C86.4742 54.4633 88.055 54.5964 89.4916 55.1053C90.9282 55.6143 92.1561 56.4761 93.02 57.5818C93.8839 58.6876 94.345 59.9876 94.345 61.3174C94.3429 63.1002 93.5139 64.8094 92.0399 66.07C90.566 67.3306 88.5674 68.0395 86.4829 68.0413ZM110.775 61.3174H98.276C97.4101 58.4377 97.0896 54.7378 94.345 52.9126C91.6004 51.0873 88.4258 50.6764 84.9491 50.6681L86.424 37.7838H110.775V61.3174Z" fill="#EEEEEE" />
            </svg>
            <p>Мы заботимся о надежной доставки авто из Кореи в Кыргызстан</p>
          </div>
          <div className="block">
            <svg xmlns="http://www.w3.org/2000/svg" width="98" height="91" viewBox="0 0 98 91" fill="none">
              <path d="M72.7977 79.2655L88.2599 65.2809L84.8517 62.1449L72.7977 73.0635L67.5928 68.1869L64.1791 71.3479L72.7977 79.2655ZM15.0811 23.7624H72.0409V18.7608H15.0757L15.0811 23.7624ZM76.2222 90.7092C70.1571 90.7092 65.0103 88.7686 60.7818 84.8873C56.5533 81.0061 54.4408 76.2779 54.4444 70.7027C54.4444 65.1342 56.5569 60.4077 60.7818 56.5231C65.0067 52.6385 70.1535 50.6962 76.2222 50.6962C82.2873 50.6962 87.4341 52.6385 91.6627 56.5231C95.8912 60.4077 98.0036 65.1342 98 70.7027C98 76.2779 95.8876 81.0061 91.6627 84.8873C87.4305 88.7686 82.2837 90.7092 76.2222 90.7092ZM0 83.982V8.18236C0 5.9483 0.856593 4.04268 2.56978 2.4655C4.28296 0.89166 6.35729 0.104736 8.79278 0.104736H78.3183C80.7502 0.104736 82.8245 0.89166 84.5413 2.4655C86.2545 4.03935 87.1111 5.94497 87.1111 8.18236V37.917C86.2255 37.6169 85.3453 37.3602 84.4705 37.1468C83.5994 36.9334 82.6648 36.7667 81.6667 36.6466V8.18737C81.6667 7.41712 81.3182 6.71022 80.6213 6.06668C79.9208 5.42647 79.1531 5.10636 78.3183 5.10636H8.79278C7.95796 5.10636 7.1903 5.42647 6.48978 6.06668C5.79289 6.71022 5.44444 7.41545 5.44444 8.18236V75.3792H39.984C40.2308 76.7463 40.5502 78.0834 40.9422 79.3905C41.3379 80.6976 41.8877 81.9447 42.5919 83.1317L42.4013 83.3068L36.2273 79.1705L28.8991 83.977L21.5709 79.1705L14.2372 83.977L6.909 79.1705L0 83.977V83.982ZM15.0811 61.4747H40.719C40.9223 60.5577 41.1727 59.6991 41.4703 58.8989C41.7716 58.0986 42.1219 57.29 42.5211 56.4731H15.0811V61.4747ZM15.0811 42.6236H54.88C56.6585 41.3332 58.5641 40.2578 60.5967 39.3975C62.6293 38.5339 64.8016 37.942 67.1137 37.6219H15.0757L15.0811 42.6236Z" fill="#EEEEEE" />
            </svg>
            <p>Лучшие условия заказа Быстрая доставка по странам СНГ Авто на любой карман и вкус</p>
          </div>
          <div className="block">
            <svg xmlns="http://www.w3.org/2000/svg" width="100" height="75" viewBox="0 0 100 75" fill="none">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M11.2496 38.9344C7.72845 43.1046 5.84973 48.0039 5.85 53.0151V57.5071C5.85 58.1193 5.54183 58.7064 4.99329 59.1393C4.44475 59.5722 3.70076 59.8154 2.925 59.8154C2.14924 59.8154 1.40526 59.5722 0.856713 59.1393C0.308169 58.7064 0 58.1193 0 57.5071V53.0197C0.00178031 47.094 2.22663 41.3014 6.39405 36.3722L7.02585 35.6243C7.23904 35.3721 7.51308 35.1555 7.83234 34.9869C8.1516 34.8182 8.50981 34.7009 8.88654 34.6415C9.26327 34.5821 9.65112 34.5819 10.028 34.6408C10.4048 34.6997 10.7632 34.8166 11.0828 34.9849C11.4024 35.1531 11.6769 35.3694 11.8906 35.6213C12.1042 35.8733 12.2529 36.156 12.3282 36.4533C12.4034 36.7506 12.4037 37.0567 12.3291 37.354C12.2544 37.6514 12.1062 37.9343 11.8931 38.1865L11.2613 38.9344H11.2496Z" fill="#EEEEEE" />
              <path fill-rule="evenodd" clip-rule="evenodd" d="M27.7467 31.4925C21.3702 31.4925 15.4207 34.0039 11.8873 38.1866L7.02011 35.629C9.29439 32.9369 12.3755 30.7295 15.9901 29.2026C19.6047 27.6757 23.641 26.8765 27.7408 26.8759H29.0278C29.8036 26.8759 30.5476 27.1191 31.0961 27.5519C31.6447 27.9848 31.9528 28.572 31.9528 29.1842C31.9528 29.7964 31.6447 30.3835 31.0961 30.8164C30.5476 31.2493 29.8036 31.4925 29.0278 31.4925H27.7467ZM45.753 38.8791C48.5025 42.1384 49.9708 45.9609 49.9708 49.8758H55.8208C55.8221 45.0515 54.0125 40.3349 50.6202 36.3215L50.0352 35.629C49.8279 35.367 49.5562 35.1405 49.236 34.9629C48.9159 34.7853 48.5538 34.6603 48.1713 34.5951C47.7887 34.5299 47.3935 34.526 47.0091 34.5835C46.6246 34.6411 46.2586 34.7589 45.9329 34.9301C45.6072 35.1012 45.3283 35.3223 45.1127 35.58C44.8972 35.8378 44.7494 36.127 44.678 36.4307C44.6067 36.7344 44.6133 37.0462 44.6975 37.3478C44.7816 37.6494 44.9416 37.9346 45.168 38.1866L45.753 38.8791Z" fill="#EEEEEE" />
              <path fill-rule="evenodd" clip-rule="evenodd" d="M29.3145 31.4925C35.6851 31.4925 41.6346 34.0039 45.168 38.1866L50.0352 35.629C47.7609 32.9369 44.6798 30.7295 41.0652 29.2026C37.4506 27.6757 33.4143 26.8765 29.3145 26.8759H28.0275C27.6434 26.8759 27.263 26.9356 26.9081 27.0516C26.5533 27.1676 26.2308 27.3376 25.9592 27.5519C25.6876 27.7663 25.4721 28.0208 25.3251 28.3008C25.1781 28.5809 25.1025 28.881 25.1025 29.1842C25.1025 29.4873 25.1781 29.7875 25.3251 30.0675C25.4721 30.3476 25.6876 30.602 25.9592 30.8164C26.2308 31.0307 26.5533 31.2008 26.9081 31.3168C27.263 31.4328 27.6434 31.4925 28.0275 31.4925H29.3145Z" fill="#EEEEEE" />
              <path fill-rule="evenodd" clip-rule="evenodd" d="M28.156 26.345C29.8845 26.345 31.5961 26.0763 33.1931 25.5543C34.79 25.0323 36.2411 24.2672 37.4633 23.3026C38.6856 22.3381 39.6551 21.193 40.3166 19.9327C40.9781 18.6724 41.3185 17.3217 41.3185 15.9576C41.3185 14.5935 40.9781 13.2428 40.3166 11.9825C39.6551 10.7223 38.6856 9.57718 37.4633 8.61263C36.2411 7.64807 34.79 6.88294 33.1931 6.36092C31.5961 5.83891 29.8845 5.57023 28.156 5.57023C24.6651 5.57023 21.3172 6.66461 18.8487 8.61263C16.3803 10.5606 14.9935 13.2027 14.9935 15.9576C14.9935 18.7125 16.3803 21.3546 18.8487 23.3026C21.3172 25.2506 24.6651 26.345 28.156 26.345ZM28.156 30.9616C33.1984 30.9616 38.0343 29.3808 41.5999 26.5671C45.1654 23.7533 47.1685 19.9369 47.1685 15.9576C47.1685 11.9783 45.1654 8.16198 41.5999 5.34818C38.0343 2.53439 33.1984 0.953613 28.156 0.953613C23.1136 0.953613 18.2777 2.53439 14.7121 5.34818C11.1466 8.16198 9.14349 11.9783 9.14349 15.9576C9.14349 19.9369 11.1466 23.7533 14.7121 26.5671C18.2777 29.3808 23.1136 30.9616 28.156 30.9616ZM53.0712 53.7492C49.5469 57.9203 47.6661 62.8213 47.6658 67.8345V72.6081C47.6658 73.2203 47.3576 73.8075 46.8091 74.2403C46.2605 74.6732 45.5165 74.9164 44.7408 74.9164C43.965 74.9164 43.221 74.6732 42.6725 74.2403C42.1239 73.8075 41.8158 73.2203 41.8158 72.6081V67.8345C41.8152 61.9114 44.0359 56.1206 48.1981 51.1916L48.9762 50.2683C49.4075 49.759 50.0775 49.4057 50.8389 49.2862C51.6003 49.1667 52.3906 49.2908 53.0361 49.6312C53.6815 49.9716 54.1292 50.5004 54.2806 51.1012C54.432 51.7021 54.2747 52.3258 53.8434 52.8352L53.0712 53.7492Z" fill="#EEEEEE" />
              <path fill-rule="evenodd" clip-rule="evenodd" d="M70.1006 45.9656C66.8826 45.9652 63.7144 46.5921 60.8772 47.7905C58.0401 48.9889 55.622 50.7218 53.8376 52.8351L48.9763 50.2729C51.2944 47.5281 54.4355 45.2774 58.1206 43.7207C61.8056 42.1639 65.9208 41.3493 70.1006 41.349H71.411C72.1868 41.349 72.9308 41.5922 73.4793 42.0251C74.0279 42.458 74.336 43.0451 74.336 43.6573C74.336 44.2695 74.0279 44.8566 73.4793 45.2895C72.9308 45.7224 72.1868 45.9656 71.411 45.9656H70.1006ZM88.7446 53.7492C92.2689 57.9203 94.1497 62.8213 94.15 67.8345V72.6081C94.15 73.2203 94.4581 73.8074 95.0067 74.2403C95.5552 74.6732 96.2992 74.9164 97.075 74.9164C97.8507 74.9164 98.5947 74.6732 99.1433 74.2403C99.6918 73.8074 100 73.2203 100 72.6081V67.8345C99.9988 61.9109 97.776 56.1201 93.6118 51.1916L92.8337 50.2683C92.4024 49.7589 91.7324 49.4057 90.971 49.2862C90.2096 49.1667 89.4193 49.2908 88.7738 49.6312C88.1284 49.9716 87.6807 50.5004 87.5293 51.1012C87.3779 51.7021 87.5352 52.3258 87.9665 52.8351L88.7446 53.7492Z" fill="#EEEEEE" />
              <path fill-rule="evenodd" clip-rule="evenodd" d="M71.7093 45.9656C74.9273 45.9652 78.0956 46.5921 80.9327 47.7905C83.7698 48.9889 86.188 50.7218 87.9723 52.8351L92.8395 50.2729C90.5208 47.5275 87.3788 45.2764 83.6926 43.7196C80.0064 42.1628 75.8901 41.3485 71.7093 41.349H70.3931C69.6173 41.349 68.8733 41.5922 68.3248 42.0251C67.7762 42.458 67.468 43.0451 67.468 43.6573C67.468 44.2695 67.7762 44.8566 68.3248 45.2895C68.8733 45.7224 69.6173 45.9656 70.3931 45.9656H71.7093Z" fill="#EEEEEE" />
              <path fill-rule="evenodd" clip-rule="evenodd" d="M70.5685 41.349C72.2971 41.349 74.0087 41.0804 75.6056 40.5583C77.2026 40.0363 78.6536 39.2712 79.8758 38.3066C81.0981 37.3421 82.0676 36.197 82.7291 34.9367C83.3906 33.6765 83.7311 32.3257 83.7311 30.9616C83.7311 29.5976 83.3906 28.2468 82.7291 26.9866C82.0676 25.7263 81.0981 24.5812 79.8758 23.6167C78.6536 22.6521 77.2026 21.887 75.6056 21.3649C74.0087 20.8429 72.2971 20.5743 70.5685 20.5743C67.0776 20.5743 63.7297 21.6686 61.2612 23.6167C58.7928 25.5647 57.406 28.2067 57.406 30.9616C57.406 33.7166 58.7928 36.3586 61.2612 38.3066C63.7297 40.2546 67.0776 41.349 70.5685 41.349ZM70.5685 45.9656C75.611 45.9656 80.4469 44.3849 84.0124 41.5711C87.578 38.7573 89.5811 34.941 89.5811 30.9616C89.5811 26.9823 87.578 23.166 84.0124 20.3522C80.4469 17.5384 75.611 15.9576 70.5685 15.9576C65.5261 15.9576 60.6902 17.5384 57.1247 20.3522C53.5591 23.166 51.556 26.9823 51.556 30.9616C51.556 34.941 53.5591 38.7573 57.1247 41.5711C60.6902 44.3849 65.5261 45.9656 70.5685 45.9656Z" fill="#EEEEEE" />
            </svg>
            <p>Надежные партнеры в Качественный сервис и обслуживание</p>
          </div>
        </div>

      </div>
      {/* exactly////////////////// */}



    </div>
  )
}
