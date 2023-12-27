<template>
  <div class="container">
    <Breadcrumb overlayShow />
    <a-card v-calcHeight="{ height: 18, dom: '.ant-card-body' }" title="富文本" :hoverable="true">
      <Editor
        api-key="rwwsrynbk8cqoox4n5ixrwqlovmjwgcjm4ia30pf4pav74b8"
        :init="{
          toolbar: false,
          menubar: false,
          inline: true,
          branding: false,
          language: 'zh_CN'
        }"
        initial-value="Welcome to TinyMCE!"
      />
      <Editor
        api-key="rwwsrynbk8cqoox4n5ixrwqlovmjwgcjm4ia30pf4pav74b8"
        :init="{
          toolbar: false,
          menubar: false,
          branding: false,
          toolbar_mode: 'sliding',
          language: 'zh_CN'
        }"
        initial-value="Welcome to TinyMCE!"
      />
      <Editor
        api-key="rwwsrynbk8cqoox4n5ixrwqlovmjwgcjm4ia30pf4pav74b8"
        :init="{
          branding: false,
          plugins: [
            'advlist',
            'autolink',
            'link',
            'image',
            'lists',
            'charmap',
            'preview',
            'anchor',
            'pagebreak',
            'searchreplace',
            'wordcount',
            'visualblocks',
            'visualchars',
            'code',
            'fullscreen',
            'insertdatetime',
            'media',
            'table',
            'emoticons',
            'help'
          ],
          toolbar:
            'undo redo | styles | bold italic | alignleft aligncenter alignright alignjustify | ' +
            'bullist numlist outdent indent | link image | print preview media fullscreen | ' +
            'forecolor backcolor emoticons | help',
          menu: {
            favs: { title: 'My Favorites', items: 'code visualaid | searchreplace | emoticons' }
          },
          menubar: 'favs file edit view insert format tools table help',
          toolbar_mode: 'sliding',
          language: 'zh_CN'
        }"
        initial-value="Welcome to TinyMCE!"
      />
    </a-card>
  </div>
</template>

<script setup lang="jsx">
import Breadcrumb from '@/components/Breadcrumb.vue'
import { ref } from 'vue'
import Editor from '@tinymce/tinymce-vue'

// https://www.tiny.cloud/
</script>

<style lang="scss" scoped>
.ant-card:deep(.ant-card-body) {
  overflow-x: hidden;
  overflow-y: auto;
}
</style>
