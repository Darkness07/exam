import React from 'react'
import './footer.scss'
export default function Footer() {
    return (
        <div className='Footer'>
            <div className="block c1">
                <h2>Страницы</h2>
                <ul>
                    <li>Главная</li>
                    <li>О нас</li>
                    <li>Контакты</li>
                </ul>
            </div>
            <div className="block c2">
                <h2>Ресурсы</h2>
                <ul>
                    <li>Инструкция</li>
                    <li>Release Note</li>
                    <li>Политика Конфиденциальности</li>
                    <li>Разработчик</li>
                </ul>
            </div>
            <div className="block c3">
                <h2>Бренды</h2>
                <ul>
                    <li>Geely Monjaro</li>
                    <li>Nissan</li>
                    <li>BMW</li>
                    <li>Lamborghini</li>
                    <li>Chevrolet</li>
                </ul>
            </div>
            <div className="block c4">
                <h2>Смотрите нас</h2>
                <div className="block_svg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="37" height="37" viewBox="0 0 37 37" fill="none">
                        <path d="M18.2834 3.10815C9.9035 3.10815 3.04723 9.94919 3.04723 18.3748C3.04723 25.9929 8.62366 32.3159 15.9065 33.4586V22.7933H12.0366V18.3748H15.9065V15.0076C15.9065 11.1833 18.1767 9.08073 21.6658 9.08073C23.3266 9.08073 25.0635 9.37022 25.0635 9.37022V13.1335H23.1437C21.2544 13.1335 20.6602 14.3067 20.6602 15.5104V18.3748H24.8959L24.2103 22.7933H20.6602V33.4586C24.2505 32.8916 27.5199 31.0597 29.878 28.2936C32.2361 25.5276 33.5277 22.0096 33.5195 18.3748C33.5195 9.94919 26.6633 3.10815 18.2834 3.10815Z" fill="#F3F3F3" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="27" viewBox="0 0 32 27" fill="none">
                        <path d="M31.8669 3.37987C30.6938 3.91314 29.4292 4.26357 28.1188 4.43117C29.4596 3.62365 30.4957 2.34381 30.9832 0.804962C29.7186 1.56677 28.3169 2.10004 26.839 2.40476C25.6353 1.09445 23.9441 0.332642 22.0244 0.332642C18.4439 0.332642 15.5185 3.25798 15.5185 6.86895C15.5185 7.38698 15.5795 7.88978 15.6861 8.3621C10.2621 8.08785 5.4322 5.48246 2.21737 1.5363C1.65363 2.49618 1.33367 3.62365 1.33367 4.81207C1.33367 7.08226 2.47638 9.09343 4.24378 10.2361C3.16201 10.2361 2.15642 9.93142 1.27273 9.47434V9.52005C1.27273 12.6892 3.52768 15.3403 6.51397 15.9345C5.5552 16.1968 4.54865 16.2334 3.57339 16.0411C3.98721 17.34 4.79767 18.4765 5.89083 19.2909C6.984 20.1053 8.3049 20.5567 9.66785 20.5815C7.35749 22.4105 4.49365 23.3991 1.54698 23.385C1.02895 23.385 0.510919 23.3545 -0.0071106 23.2935C2.88776 25.1523 6.33113 26.2341 10.0183 26.2341C22.0244 26.2341 28.6216 16.2697 28.6216 7.63076C28.6216 7.34128 28.6216 7.06702 28.6064 6.77754C29.8862 5.86337 30.9832 4.70542 31.8669 3.37987Z" fill="#F3F3F3" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 31 31" fill="none">
                        <path d="M11.0193 29.8187C12.482 30.2605 13.9599 30.5196 15.5292 30.5196C19.5701 30.5196 23.4455 28.9143 26.3028 26.057C29.1601 23.1997 30.7654 19.3243 30.7654 15.2834C30.7654 13.2826 30.3713 11.3013 29.6056 9.45278C28.8399 7.60424 27.7176 5.92462 26.3028 4.50981C24.888 3.095 23.2084 1.97271 21.3598 1.20702C19.5113 0.441336 17.5301 0.0472412 15.5292 0.0472412C13.5284 0.0472412 11.5471 0.441336 9.69859 1.20702C7.85006 1.97271 6.17044 3.095 4.75563 4.50981C1.89829 7.36714 0.29306 11.2425 0.29306 15.2834C0.29306 21.7588 4.36111 27.32 10.1051 29.514C9.96802 28.3256 9.8309 26.3601 10.1051 25.0041L11.8573 17.4774C11.8573 17.4774 11.4155 16.5937 11.4155 15.192C11.4155 13.0894 12.7258 11.5201 14.2189 11.5201C15.5292 11.5201 16.1387 12.4799 16.1387 13.7141C16.1387 15.0244 15.2702 16.8984 14.8284 18.6963C14.5693 20.1894 15.6206 21.4998 17.1443 21.4998C19.8563 21.4998 21.9589 18.6049 21.9589 14.5216C21.9589 10.8649 19.3383 8.36619 15.5749 8.36619C11.2783 8.36619 8.74913 11.5658 8.74913 14.933C8.74913 16.2433 9.17574 17.5688 9.87661 18.4373C10.0137 18.5287 10.0137 18.6506 9.96802 18.8791L9.52617 20.5399C9.52617 20.7989 9.35858 20.8903 9.09956 20.7075C7.14933 19.8543 6.02186 17.0813 6.02186 14.8416C6.02186 10.0269 9.43476 5.65415 16.0168 5.65415C21.258 5.65415 25.3413 9.41748 25.3413 14.4149C25.3413 19.6562 22.096 23.8614 17.449 23.8614C15.9711 23.8614 14.5236 23.0691 14.0056 22.1397L12.9848 25.7506C12.6344 27.061 11.6745 28.8131 11.0193 29.8644V29.8187Z" fill="#F3F3F3" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="28" viewBox="0 0 25 28" fill="none">
                        <path d="M19.1453 4.8674C18.1037 3.6784 17.5298 2.15145 17.5302 0.570801H12.8222V19.4636C12.7859 20.486 12.3543 21.4544 11.6182 22.1649C10.8822 22.8754 9.89911 23.2725 8.87608 23.2727C6.71254 23.2727 4.91468 21.5053 4.91468 19.3113C4.91468 16.6907 7.44388 14.7252 10.0493 15.5327V10.7181C4.79279 10.0172 0.191467 14.1005 0.191467 19.3113C0.191467 24.3849 4.39665 27.9959 8.86084 27.9959C13.645 27.9959 17.5302 24.1107 17.5302 19.3113V9.72773C19.4393 11.0988 21.7314 11.8344 24.0818 11.8303V7.12235C24.0818 7.12235 21.2174 7.25948 19.1453 4.8674Z" fill="#F3F3F3" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 31 31" fill="none">
                        <path d="M9.34485 0.0472412H22.1432C27.0188 0.0472412 30.9802 4.00864 30.9802 8.88421V21.6826C30.9802 24.0263 30.0492 26.274 28.3919 27.9313C26.7347 29.5885 24.4869 30.5196 22.1432 30.5196H9.34485C4.46928 30.5196 0.507874 26.5582 0.507874 21.6826V8.88421C0.507874 6.5405 1.43891 4.29278 3.09616 2.63553C4.75342 0.978277 7.00114 0.0472412 9.34485 0.0472412ZM9.04012 3.09447C7.58541 3.09447 6.19027 3.67236 5.16163 4.701C4.13299 5.72964 3.55511 7.12477 3.55511 8.57949V21.9873C3.55511 25.0193 6.00813 27.4723 9.04012 27.4723H22.4479C23.9027 27.4723 25.2978 26.8944 26.3264 25.8658C27.3551 24.8372 27.933 23.442 27.933 21.9873V8.57949C27.933 5.5475 25.4799 3.09447 22.4479 3.09447H9.04012ZM23.743 5.3799C24.2481 5.3799 24.7326 5.58055 25.0897 5.93772C25.4469 6.29489 25.6475 6.77931 25.6475 7.28442C25.6475 7.78953 25.4469 8.27395 25.0897 8.63112C24.7326 8.98828 24.2481 9.18894 23.743 9.18894C23.2379 9.18894 22.7535 8.98828 22.3963 8.63112C22.0392 8.27395 21.8385 7.78953 21.8385 7.28442C21.8385 6.77931 22.0392 6.29489 22.3963 5.93772C22.7535 5.58055 23.2379 5.3799 23.743 5.3799ZM15.744 7.66532C17.7645 7.66532 19.7022 8.46794 21.1308 9.89661C22.5595 11.3253 23.3621 13.263 23.3621 15.2834C23.3621 17.3038 22.5595 19.2415 21.1308 20.6702C19.7022 22.0989 17.7645 22.9015 15.744 22.9015C13.7236 22.9015 11.7859 22.0989 10.3572 20.6702C8.92857 19.2415 8.12595 17.3038 8.12595 15.2834C8.12595 13.263 8.92857 11.3253 10.3572 9.89661C11.7859 8.46794 13.7236 7.66532 15.744 7.66532ZM15.744 10.7126C14.5318 10.7126 13.3692 11.1941 12.512 12.0513C11.6548 12.9085 11.1732 14.0711 11.1732 15.2834C11.1732 16.4957 11.6548 17.6583 12.512 18.5155C13.3692 19.3727 14.5318 19.8543 15.744 19.8543C16.9563 19.8543 18.1189 19.3727 18.9761 18.5155C19.8333 17.6583 20.3149 16.4957 20.3149 15.2834C20.3149 14.0711 19.8333 12.9085 18.9761 12.0513C18.1189 11.1941 16.9563 10.7126 15.744 10.7126Z" fill="#F3F3F3" />
                    </svg>
                </div>
            </div>
        </div>
    )
}
