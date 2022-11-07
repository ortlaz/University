import React, {useEffect} from "react";
import {Button, Col, Dropdown, Form, Input, Menu, Row, Switch, Table} from "antd";
import {UnorderedListOutlined} from "@ant-design/icons";
import {Link} from "react-router-dom";

export default function AuthorList({authorized, setAuthorized}) {

    useEffect(() => setAuthorized(true));

    const dataSource = [
        {key: 1, name: 'Джером Сэлинджер'},
        {key: 2, name: 'Джером Сэлинджер'}
    ];
    const renderActions = () => {
        return (
            <Dropdown
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
            title: 'Имя',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Действия',
            key: 'actions',
            render: renderActions
        }
    ];
    return (
        <div>
            <p className="pDivider" style={{ marginBottom: 20 }}>
                СПИСОК АВТОРОВ
            </p>
            <Form>
                <Row>
                    <Col xl={16} md={14} sm={24} xs={24}>
                        <Form.Item label="Поиск по имени автора">
                            <Input/>
                        </Form.Item>
                    </Col>
                    <Col xl={{span: 3, offset: 1}} md={{span: 4, offset: 1}} sm={24} xs={24}>
                        <Form.Item label="">
                            <Button ghost type="primary" style={{width: '100%'}}>Сформировать</Button>
                        </Form.Item>
                    </Col>
                    <Col xl={{span: 3, offset: 1}} md={{span: 4, offset: 1}} sm={24} xs={24}>
                        <Form.Item label="">
                            <Button danger ghost style={{width: '100%'}}>Очистить</Button>
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
            <Table columns={columns} dataSource={dataSource}/>
        </div>
    )
}