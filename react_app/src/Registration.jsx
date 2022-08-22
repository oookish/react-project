import React from "react";


export const Registration = () => {
    return <>
        <div>
            <img src="" alt="" />
        </div>
        <form>
            <div>
                <h1>Регистрация</h1>
            </div>
            <label htmlFor="email">Email</label>
            <input id="email" type="email" name="email" />
            <label htmlFor="name">Как Вас зовут</label>
            <input id="name" type="name" name="name" size={28} />
            <label htmlFor="password">Пароль</label>
            <input id="password" type="password" name="password" size={28} />
        </form>
    </>
}