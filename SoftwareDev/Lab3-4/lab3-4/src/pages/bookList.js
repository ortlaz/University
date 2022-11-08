import React, {useEffect} from "react";
import {Button, Dropdown, Menu, Table} from "antd";
import {UnorderedListOutlined} from "@ant-design/icons";
import {Link} from "react-router-dom";
import BookListFilters from "./bookListFilters";

export default function BookList({authorized, setAuthorized}) {

    const dataSource = [
        {key: 1, name: 'Над пропастью во ржи', authors: 'Джером Сэлинджер', publish_year: '1989', created_year: '2020'},
        {key: 2, name: 'Над пропастью во ржи', authors: 'Джером Сэлинджер', publish_year: '1989', created_year: '2020'}
    ];
    const renderActions = () => {
        return (
            <Dropdown
                overlay={
                    <Menu>
                        <Menu.Item key="1">
                            <Link
                                className="linkIcon"
                                to={'/book-card'}
                                target={'_blank'}
                            >
                                Просмотреть
                            </Link>
                        </Menu.Item>
                        {authorized && (
                            <>
                                <Menu.Item key="2">
                                    Забронировать
                                </Menu.Item>
                                <Menu.Item key="3">
                                    Списать
                                </Menu.Item></>
                        )}
                    </Menu>
                }
            >
                <Button
                    type="primary"
                    ghost
                    shape="circle"
                    icon={<UnorderedListOutlined/>}
                />
            </Dropdown>
        );
    };
    const columns = [
        {
            title: 'Название',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Авторы',
            dataIndex: 'authors',
            key: 'authors'
        },
        {
            title: 'Год издания',
            dataIndex: 'publish_year',
            key: 'publish_year'
        },
        {
            title: 'Год поступления',
            dataIndex: 'created_year',
            key: 'created_year'
        },
        {
            title: 'Действия',
            key: 'actions',
            render: renderActions
        }
    ];
    return (
        <div>
            <p className="pDivider" style={{marginBottom: 25}}>
                КНИЖНЫЙ КАТАЛОГ
            </p>
            {authorized && (<BookListFilters/>)}
            <Table columns={columns} dataSource={dataSource}/>
        </div>
    )
}