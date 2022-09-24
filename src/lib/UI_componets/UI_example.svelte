<script>
  import Control from "./Control.svelte";
  import Input from "./Input.svelte";
  import Incrementer from "./Incrementer.svelte";
</script>

<Control>
  <Input value={"Topological Data Analysis"} label={"Label Name"} />
  <Input value={"Ribbon"} label={"Toggle Ornament"} checkbox={true} />
  <Input value={"#73DE8C"} label={"Ribbon Color"} color={true} />
  <Incrementer/>
</Control>
