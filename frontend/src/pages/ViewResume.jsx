import { useDispatch, useSelector } from "react-redux";
import Template1 from "../components/templates/Template1";
import Template2 from "../components/templates/Template2";
import Template3 from "../components/templates/Template3";
import Template4 from "../components/templates/Template4";
import Template5 from "../components/templates/Template5";
import { useParams } from "react-router-dom";
import axios from "axios";
import { setResume } from "../redux/slices/resumeSlice";
import { useEffect } from "react";
import Navbar from "../components/Navbar";

const templates = [Template1, Template2, Template3, Template4, Template5];

export default function ViewResume() {
  const { index, id } = useParams();
  const TemplateComponent = templates[index];
  const { resume } = useSelector((state) => state.resume);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BASE_URL}/resume/getResume/${id}`, {
        withCredentials: true,
      })
      .then((res) => dispatch(setResume(res.data.resume)))
      .catch((err) => console.error(err));
  }, [id]);

  console.log(resume);
  return (
    <>
      <Navbar />
      <div className=" text-white p-3 sm:p-6">
        <h1 className=" text-4xl font-bold ">Resume Preview</h1>
        <TemplateComponent resume={resume} />
      </div>
    </>
  );
}
