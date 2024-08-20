import React from "react";
import { Skeleton } from "@mui/material";
import { Card, Col, Row } from 'react-bootstrap';

const ProjectSkeleton = ({ count = 3 }) => {
  return (
    <Row>
      {Array.from({ length: count }).map((_, index) => (
        <Col lg={5} md={4} key={index} className="mb-3">
          <Card>
            <Card.Header>
              <Skeleton variant="rectangular" height={40} />
            </Card.Header>
            <Card.Body>
              <Skeleton variant="text" height={20} />
              <Skeleton variant="text" height={20} />
              <Skeleton variant="text" height={20} />
              <Skeleton variant="text" height={20} />
              <Skeleton variant="text" height={20} />
              <Skeleton variant="text" height={20} />
              <Skeleton variant="text" height={20} />
              <Skeleton variant="text" height={20} />
            </Card.Body>
            <Card.Footer>
              <Skeleton variant="rectangular"  height={30} />
            </Card.Footer>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default ProjectSkeleton;
