<<template>
  <div class="MindMapMenu">
    <ul>
      <li>Create</li>
      <li>Open</li>
      <li>Delete</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Mindmap'
}
</script>
<style scoped>
ul {
  list-style-type: square;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: green;
}
li {
  text-decoration: none;
  float: left;
}
</style>
