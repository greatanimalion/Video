import Link from 'next/link';
import {Button} from '@nextui-org/button';
export default function NotFound() {
  return (
    <div>
      <h2>你来到了错误的路径</h2>
      <p>请点击下面的按钮返回首页</p>
      <Button><Link href="/">Return Home</Link>
      </Button>
    </div>
  );
}