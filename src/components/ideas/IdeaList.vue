<<template>
  <div class="idea-list">
      
  </div>
</template>
<script>
import { addIdea } from '../../store/actions'

export default {
  name: 'IdeaList',
  vuex: {
    getters: {
      activeIdea: state => state.activeIdea
    },
    actions: {
      addIdea
    }
  }
}
</script>
<style scoped>
.idea-list {
    width: 80%;
}
</style>