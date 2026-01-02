import { useState } from "react";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import TextField from "@mui/material/TextField";
import { useTodo } from "../contexts/TodoContext";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import './pages.css'

type AddTodoProps = {
  onSubmit?: () => void; // callback แจ้ง App ว่าเพิ่มเสร็จแล้ว
};

export const AddTodo: React.FC<AddTodoProps> = ({ onSubmit }) => {
  const { manager, refresh } = useTodo(); // ดึง manager และ refresh จาก context
  const [text, setText] = useState("");
  const [dueDate, setDueDate] = useState<Date | null>(null);

  const handleAdd = () => {
    if (!text || !dueDate) {
      alert("กรุณากรอกข้อมูลให้ครบ");
      return;
    }

    // แปลง Date → string (YYYY-MM-DD)
    const formattedDate = dayjs(dueDate).format("YYYY-MM-DD");

    manager.addTodo(text, formattedDate); // เพิ่ม Todo
    refresh(); // อัปเดตรายการใน UI
    onSubmit?.(); // ปิด panel ใน App
  };

  return (
    <div >
      <h3 className="text">ADD TODO</h3>

      <TextField
        label="Todo"
        value={text}
        onChange={(e) => setText(e.target.value)}
        fullWidth
      />

      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
        label="Due date"
        value ={dueDate ? dayjs(dueDate):null}
        onChange={(newValue) => setDueDate(newValue ? newValue.toDate():null)}
        slotProps={{
          textField: {
            fullWidth: true,
            margin: "normal",
          },
        }}
      />
      </LocalizationProvider>

      <button onClick={handleAdd} className="button-addp">
        Add
      </button>
    </div>
  );
};



  


