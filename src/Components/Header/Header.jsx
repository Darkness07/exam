import React from 'react'
import logo1 from './img/logo.svg'
import './header.scss'
export default function Header() {
    return (
        <div className='Header'>
            <img src={logo1} alt="" />
            <nav>
                <a href="" active_link='1'>Главная</a>
                <a href="">О нас</a>
                <a href="">Контакты</a>
            </nav>
            <div className="search">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M15.7366 16.5685C13.802 18.0525 11.3489 18.7691 8.88115 18.5709C6.41343 18.3728 4.11841 17.275 2.46744 15.503C0.816467 13.7311 -0.0651161 11.4195 0.00375111 9.04296C0.0726184 6.66646 1.08671 4.40548 2.83774 2.72439C4.58878 1.0433 6.94383 0.0697176 9.41921 0.00360128C11.8946 -0.0625151 14.3024 0.783853 16.1481 2.36888C17.9937 3.9539 19.1372 6.15725 19.3436 8.5264C19.55 10.8955 18.8036 13.2506 17.2578 15.108L24.6574 22.2106C24.7632 22.3052 24.848 22.4193 24.9068 22.5461C24.9656 22.6728 24.9973 22.8097 24.9998 22.9484C25.0024 23.0872 24.9758 23.225 24.9217 23.3537C24.8675 23.4823 24.787 23.5992 24.6847 23.6973C24.5825 23.7955 24.4608 23.8728 24.3268 23.9248C24.1927 23.9768 24.0492 24.0023 23.9047 23.9998C23.7601 23.9974 23.6176 23.967 23.4856 23.9105C23.3535 23.8541 23.2347 23.7726 23.1362 23.6711L15.7366 16.5685ZM4.36307 14.4163C3.30974 13.405 2.59233 12.1165 2.30151 10.7138C2.01069 9.31112 2.15952 7.85714 2.72918 6.53562C3.29884 5.21411 4.26377 4.08438 5.50202 3.28922C6.74027 2.49405 8.19626 2.06913 9.68597 2.06817C11.1757 2.06721 12.6323 2.49024 13.8716 3.28381C15.111 4.07738 16.0775 5.20586 16.649 6.52663C17.2205 7.84741 17.3714 9.30119 17.0826 10.7043C16.7937 12.1073 16.0781 13.3967 15.0262 14.4094L15.019 14.4163L15.0118 14.4218C13.5983 15.7757 11.6829 16.5356 9.68626 16.5345C7.68961 16.5335 5.77503 15.7717 4.36307 14.4163Z" fill="#EEEEEE" />
                </svg>
                <input type="search" placeholder='поиск...' name="" id="" />
            </div>
        </div>
    )
}