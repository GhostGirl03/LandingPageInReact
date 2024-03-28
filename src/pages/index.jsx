import {Container } from "react-bootstrap";
import {MyNavbar} from "@/components/MyNavbar";
import {Jumbotron } from "@/components/Jumbotron";
import {MyCards} from "@/components/MyCards";
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from "next/link";

export default function Home() {
  return (
    <Container>
      <MyNavbar/>
      <div className="container">
      <Jumbotron/>
      <MyCards/>
      </div>
    </Container>
  );
}