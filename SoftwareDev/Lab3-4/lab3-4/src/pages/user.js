import React from "react";
import {Avatar, Button} from "antd";
import {UserOutlined, SettingOutlined} from "@ant-design/icons"
export default function User () {
    return (
        <div>
            <h1>Карта пользователя</h1>
            <div><Avatar size={128} icon={<UserOutlined />}></Avatar></div>
            <Button  icon={<SettingOutlined />} type="link">Редактировать</Button>
        </div>
    )
}