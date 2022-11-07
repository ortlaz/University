import React from "react";
import {Col, Form, Row, Switch} from "antd";

export default function BookListFilters() {

    return (
        <div>
            <Form>
                <Row>
                    <Col xl={4} md={6} sm={8} xs={24}>
                        <Form.Item label="Списанные книги">
                            <Switch/>
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
        </div>
    )
}