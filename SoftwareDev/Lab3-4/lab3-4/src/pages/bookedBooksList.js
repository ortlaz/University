import React, {useEffect} from "react";
import {Button, Dropdown, Menu, Table} from "antd";
import {UnorderedListOutlined} from "@ant-design/icons";
import {Link} from "react-router-dom";
import BookedBookFilters from "./bookedBookFilters";

export default function BookedBooksList({setAuthorized}) {
    useEffect(() => setAuthorized(true));
    const dataSource = [{
        key: 1,
        name: 'Над пропастью во ржи',
        authors: 'Джером Сэлинджер',
        publish_year: '1989',
        created_year: '2020',
        dates: '11.12.2021-01.02.2022',
        status: {name: 'Ожидает подтверждения', date: '02.12.2021'}
    }, {
        key: 2,
        name: 'Над пропастью во ржи',
        authors: 'Джером Сэлинджер',
        publish_year: '1989',
        created_year: '2020',
        dates: '11.12.2021-01.02.2022',
        status: {name: 'Подтверждено', date: '08.12.2021'}
    }];
    const renderActions = (record) => {
        return (<Dropdown
            overlay={
                <Menu>
                    <Menu.Item key="1">
                        <Link
                            className="linkIcon"
                            to={'/oneBook'}
                            target={'_blank'}
                        >
                            Просмотреть
                        </Link>
                    </Menu.Item>
                    {record.status.name === 'Ожидает подтверждения' &&
                        (<>
                            <Menu.Item key="2">
                                Подтвердить
                            </Menu.Item>
                            <Menu.Item key="3">
                                Отменить
                            </Menu.Item>
                        </>)}
                </Menu>
            }
        >
            <Button
                type="primary"
                ghost
                shape="circle"
                icon={<UnorderedListOutlined/>}
            />
        </Dropdown>);
    };
    const columns = [{
        title: 'Название', dataIndex: 'name', key: 'name',
    }, {
        title: 'Авторы', dataIndex: 'authors', key: 'authors'
    }, {
        title: 'Год издания', dataIndex: 'publish_year', key: 'publish_year'
    }, {
        title: 'Год поступления', dataIndex: 'created_year', key: 'created_year'
    }, {
        title: 'Даты бронирования', dataIndex: 'dates', key: 'dates'
    }, {
        title: 'Статус',
        dataIndex: 'status',
        key: 'status',
        align: 'center',
        render: ({name, date}) => <><p>{name}</p><p>{date}</p></>
    }, {
        title: 'Действия', key: 'actions', render: renderActions
    }];
    return (<div>
        <p className="pDivider" style={{marginBottom: 5}}>
            СПИСОК БРОНЕЙ
        </p>
        <BookedBookFilters/>
        <Table columns={columns} dataSource={dataSource}/>
    </div>)
}