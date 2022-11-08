import React from "react";
import {Button, Col, Form, Row, Switch} from "antd";
import {useNavigate} from "react-router-dom"

export default function BookListFilters() {
    const history = useNavigate();
    return (
        <div>
            <Form>
                <Row>
                    <Col xl={4} md={6} sm={8} xs={24}>
                        <Form.Item label="Списанные книги">
                            <Switch/>
                        </Form.Item>
                    </Col>
                    <Col xl={20} md={18} sm={16} xs={24}>
                        <Form.Item label="">
                            <Button style={{width: '100%'}}
                                    onClick={() => history('/book-card', {state: {forEdit: true}})}>Создать</Button>
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
        </div>
    )
}