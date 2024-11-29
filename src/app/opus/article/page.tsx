"use client"

import { useEffect, useState } from "react";

export default function Page() {
    const [article, setArticle] = useState(null);
    useEffect(() => {
        const article = localStorage.getItem('article')!;
        setArticle(JSON.parse(article).content);
    })
    return <div dangerouslySetInnerHTML={{ __html: article! }}></div>;
}