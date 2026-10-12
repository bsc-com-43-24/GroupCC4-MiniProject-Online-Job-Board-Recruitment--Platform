'use client';
import { Button, Card, Col, Input, Row, Tag, Typography } from 'antd';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { jobs } from '@/mock/jobs';

export default function Home() {
  const router = useRouter();
  const latest = jobs.slice(0, 3);

  return (
    <div style={{ maxWidth: 1000, margin: '0 auto' }}>
      <div style={{ textAlign: 'center', padding: '40px 0' }}>
        <Typography.Title>Find your next job</Typography.Title>
        <Typography.Paragraph>
          Search vacancies, apply, and track your applications.
        </Typography.Paragraph>
        <Input.Search
          placeholder="Job title or keyword"
          enterButton="Search"
          size="large"
          style={{ maxWidth: 500 }}
          onSearch={(v) => router.push(`/jobs?search=${encodeURIComponent(v)}`)}
        />
      </div>

      <Typography.Title level={3}>Latest jobs</Typography.Title>
      <Row gutter={[16, 16]}>
        {latest.map((job) => (
          <Col xs={24} md={8} key={job.id}>
            <Card title={job.title} extra={<Tag>{job.type}</Tag>}>
              <p>{job.company} · {job.location}</p>
              <p>{job.salary}</p>
              <Link href={`/jobs/${job.id}`}>View details</Link>
            </Card>
          </Col>
        ))}
      </Row>

      <Row gutter={[16, 16]} style={{ marginTop: 40 }}>
        <Col xs={24} md={12}>
          <Card title="I'm a job seeker">
            <p>Create a profile, apply, and track every application.</p>
            <Link href="/register"><Button type="primary">Get started</Button></Link>
          </Card>
        </Col>
        <Col xs={24} md={12}>
          <Card title="I'm an employer">
            <p>Post vacancies and manage applicants in one place.</p>
            <Link href="/employer/jobs"><Button>Post a job</Button></Link>
          </Card>
        </Col>
      </Row>
    </div>
  );
}