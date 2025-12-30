import React from 'react';
import { Breadcrumb, BreadcrumbItem } from './Breadcrumb';

interface PageHeaderProps {
    title: string;
    breadcrumbs: BreadcrumbItem[];
}

export const PageHeader = ({ title, breadcrumbs }: PageHeaderProps) => {
    return (
        <div className="page-header">
            <Breadcrumb items={breadcrumbs} />
            <h1 className="page-title">{title}</h1>

        </div>
    );
};
