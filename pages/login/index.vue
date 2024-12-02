<template>
  <div class="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
    <div class="flex items-center justify-center py-12">
      <Card class="mx-auto max-w-sm">
        <CardHeader>
          <CardTitle class="text-xl">
            Connexion
          </CardTitle>
          <CardDescription>
            Entrez vos informations de connexion
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div class="grid gap-4">
            <div class="grid gap-2">
              <Label for="email">Email</Label>
              <Input id="email" type="email" placeholder="m@exemple.com" required />
            </div>
            <div class="grid gap-2">
              <Label for="password">Mot de passe</Label>
              <Input id="password" type="password" />
            </div>
            <Button type="submit" class="w-full">
              Se connecter
            </Button>
          </div>
          <div class="mt-4 text-center text-sm">
            Vous n'avez pas de compte ?
            <NuxtLink to="/register" class="underline">
              Inscrivez-vous
            </NuxtLink>
          </div>
        </CardContent>
      </Card>
    </div>
    <div class="hidden bg-muted h-screen lg:block">
      <img
        src="https://cdn.lazyshop.com/files/d2c4f2c8-ada5-455a-86be-728796b838ee/other/192115ca73ec8c98c62e3cbc95b96d32.jpg"
        alt="Image" width="1920" height="1080" class="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale">
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: false
})
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
</script>
