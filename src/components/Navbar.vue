<<template>
  <div class="navbar">
      <ul>
          <li><a href="/home">Home</a></li>
          <li><a href="/ideas">Ideas</a></li>
          <li><a href="/mindmap">Mindmap</a></li>
      </ul>
  </div>
</template>
<script>
export default {
  name: 'navbar'
}
</script>
<style scoped>
ul {
    list-style: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: silver;
}
li {
    display: inline;
    border-right: 1px solid #bbbbbb;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    float: left;
}

a:link {
    color:maroon;
}

li:last-child {
    border-right: none;
}

.active {
    background-color: maroon;
    color: silver;
}
</style>
