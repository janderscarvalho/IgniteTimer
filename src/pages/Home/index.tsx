import styles, {
  CountDownContainer,
  FormContainer,
  HomeContainer,
  MinutesAmoutInput,
  Separator,
  StartCountDownButton,
  TaskInput,
} from "./styles";
import { Play } from "phosphor-react";
import { useState } from "react";

export function Home() {
  const [task, setTask] = useState("");

  return (
    <HomeContainer>
      <form action="">
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <TaskInput
            id="task"
            list="task-suggestions"
            placeholder="Dê um nome para seu projeto "
            onChange={(e) => setTask(e.target.value)}
            value={task}
          />

          <datalist id="task-suggestions">
            <option value="Desenvolver uma aplicação web" />
            <option value="Desenvolver uma aplicação mobile" />
            <option value="Desenvolver uma aplicação web e mobile" />
          </datalist>

          <label htmlFor="">durante</label>
          <MinutesAmoutInput
            type="number"
            id="minutesAmount"
            placeholder="00"
            step={5}
            min={5}
            max={60}
          />

          <span>minutos.</span>
        </FormContainer>

        <CountDownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountDownContainer>
        <StartCountDownButton disabled={task === ""} type="submit">
          <Play size={24} />
          Começar
        </StartCountDownButton>
      </form>
    </HomeContainer>
  );
}
